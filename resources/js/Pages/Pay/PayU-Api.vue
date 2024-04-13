<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="p-6 text-center bg-white shadow-lg rounded-lg">
            <div class="max-w-md mx-auto shadow-lg rounded-xl bg-white p-6">
                <div class="text-2xl font-semibold text-gray-800">
                    <span>{{ payment.amount }}</span>
                    <span class="uppercase">{{ payment.currency }}</span>
                </div>
                <p class="text-gray-600 text-sm">
                    {{ payment.reference_code }} | {{ payment.description }}
                </p>
            </div>
            <div class="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                <main class="mt-4 p-4">
                    <div class="my-3">
                        <input type="text"
                            class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                            placeholder="Card holder" maxlength="22" v-model="cardData.cardholder" />
                    </div>
                    <div class="my-3">
                        <input type="text"
                            class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                            placeholder="Card number" v-model="cardData.cardNumber" @keydown="format" @keyup="format"
                            maxlength="19" />
                    </div>
                    <div class="my-3 flex flex-col">
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <input type="text"
                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="MM" maxlength="2" v-model="cardData.expired.month" />
                            <input type="text"
                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="YYYY" maxlength="4" v-model="cardData.expired.year" />
                            <input type="text"
                                class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="CCV" maxlength="4" v-model="cardData.securityCode" @focus="card = 'back'"
                                @blur="card = 'front'" />
                        </div>
                        <div class="mt-3">
                            <input type="email"
                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="Email" maxlength="45" v-model="cardData.email" />
                        </div>
                    </div>
                </main>

                <footer class="mt-2 p-4">
                    <div class="flex justify-center center mb-2" v-if="loader">
                        <Loader />
                    </div>
                    <button v-if="!loader"
                        class="mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                        :disabled="!isValid" @click="onSubmit">
                        Pay now
                    </button>
                </footer>
            </div>
        </div>
        <ErrorModal v-if="haveError" :errorText="errorText" @close="handleCloseModal" />
    </div>
</template>

<script>
import axios from 'axios';
import ErrorModal from './Error.vue';
import Loader from './Loader.vue';

export default {
    props: ['loginKey', 'publicKey', 'apiKey', 'accountId', 'signature', 'payment'],
    components: {
        ErrorModal,
        Loader
    },
    data() {
        return {
            loader: false,
            haveError: false,
            errorText: '',
            cardData: {
                cardholder: '',
                cardNumber: '',
                expired: {
                    month: '',
                    year: '',
                },
                securityCode: '',
                email: ''
            },
            amount: this.payment.amount,
            currency: this.payment.currency,
            description: this.payment.description,
            payu: {
                endpoint: "https://api.payulatam.com",
                endpoint_payment: "/payments-api/4.0/service.cgi",
                deviceSessionId: '',
                sandbox_mode: false,
                loginKey: this.loginKey,
                publicKey: this.publicKey,
                apiKey: this.apiKey,
                hashSignature: this.signature
            }
        };
    },
    mounted() {
        console.log(this.payu);
        console.log("All good");
    },
    computed: {
        isValid() {
            if (this.cardData.cardholder.length < 5) {
                return false;
            }
            if (this.cardData.cardNumber.replace(/\s/g, '').length <= 12) {
                return false;
            }
            if (this.cardData.expired.month === '' || this.cardData.expired.year === '') {
                return false;
            }
            if (this.cardData.securityCode.length < 3) {
                return false;
            }
            return true;
        }
    },
    methods: {
        format() {
            this.cardData.cardNumber = this.cardData.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
        },
        noSpaces() {
            return this.cardData.cardNumber.replace(/\s/g, '');
        },
        onSubmit() {
            this.pay();
        },
        async pay() {
            this.loader = true;
            let card_number = this.noSpaces();
            try {
                // payment in PayU
                const paymentResponse = await axios.post(this.payu.endpoint + this.payu.endpoint_payment,
                    {
                        language: "es",
                        command: "SUBMIT_TRANSACTION",
                        merchant: {
                            apiKey: this.apiKey,
                            apiLogin: this.loginKey
                        },
                        transaction: {
                            order: {
                                accountId: this.accountId,
                                referenceCode: this.payment.reference_code,
                                description: this.payment.description,
                                language: "es",
                                signature: this.signature,
                                additionalValues: {
                                    TX_VALUE: {
                                        value: this.payment.amount,
                                        currency: this.payment.currency
                                    }
                                },
                                buyer: {
                                    fullName: "First name and second buyer name",
                                    emailAddress: "buyer_test@test.com",
                                    contactPhone: "7563126",
                                    dniNumber: "123456789",
                                },
                            },
                            creditCard: {
                                number: card_number,
                                securityCode: this.cardData.securityCode,
                                expirationDate: this.cardData.expired.year + "/" + this.cardData.expired.month,
                                name: this.cardData.cardholder
                            },
                            type: "AUTHORIZATION_AND_CAPTURE",
                            paymentMethod: "VISA",
                            paymentCountry: "PE",
                            ipAddress: "127.0.0.1",
                            userAgent: "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
                        },
                        test: true

                    });

                    console.log(paymentResponse)

                this.loader = false;
                //window.location.reload();
            } catch (error) {
                this.loader = false;
                this.showError(error.data.error)
                console.log(error);
            }
        },
        showError(text) {
            this.haveError = true,
                this.errorText = text;
        },
        handleCloseModal() {
            this.haveError = false;
        }
    }
};
</script>

<style scoped>
.form-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1.5em 1.5em;
    -webkit-tap-highlight-color: transparent;
}

.submit-button:disabled {
    cursor: not-allowed;
    background-color: #D1D5DB;
    color: #111827;
}

.submit-button:disabled:hover {
    background-color: #9CA3AF;
}

.credit-card {
    max-width: 420px;
    margin-top: 1rem;
}

@media only screen and (max-width: 420px) {
    .credit-card .front {
        font-size: 100%;
        padding: 0 2rem;
        bottom: 2rem !important;
    }

    .credit-card .front .number {
        margin-bottom: 0.5rem !important;
    }
}
</style>

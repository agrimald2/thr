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
                <header class="flex flex-col justify-center items-center">
                    <div class="relative" v-show="card === 'front'">
                        <img class="w-full h-auto"
                            src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                            alt="front credit card">
                        <div class="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                            <p class="number mb-5 sm:text-xl">
                                {{ cardData.cardNumber !== '' ? cardData.cardNumber : '0000-0000-0000-0000' }}
                            </p>
                            <div class="flex flex-row justify-between">
                                <p>{{ cardData.cardholder !== '' ? cardData.cardholder : 'Card holder' }}</p>
                                <div class="">
                                    <span>{{ cardData.expired.month }}</span>
                                    <span v-if="cardData.expired.month !== ''">/</span>
                                    <span>{{ cardData.expired.year }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative" v-show="card === 'back'">
                        <img class="w-full h-auto"
                            src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                            alt="back credit card">
                        <div
                            class="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12">
                            <div class="border border-white w-16 h-9 flex justify-center items-center">
                                <p>{{ cardData.securityCode !== '' ? cardData.securityCode : 'code' }}</p>
                            </div>
                        </div>
                    </div>
                    <ul class="flex">
                        <li class="mx-2">
                            <img class="w-16"
                                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                                alt="" />
                        </li>
                        <li class="mx-2">
                            <img class="w-14"
                                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                                alt="" />
                        </li>
                        <li class="ml-5">
                            <img class="w-7"
                                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                                alt="" />
                        </li>
                    </ul>
                </header>
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
                            <select
                                class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                v-model="cardData.expired.month">
                                <option value="" selected disabled>MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select
                                class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                v-model="cardData.expired.year">
                                <option value="" selected disabled>YY</option>
                                <option value="24">2024</option>
                                <option value="25">2025</option>
                                <option value="26">2026</option>
                                <option value="27">2027</option>
                                <option value="28">2028</option>
                                <option value="29">2029</option>
                            </select>
                            <input type="text"
                                class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="Security code" maxlength="4" v-model="cardData.securityCode"
                                @focus="card = 'back'" @blur="card = 'front'" />
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
                        @click="createCulqui">
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
    props: ['merchantId', 'publicKey', 'payment'],
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
            card: 'front',
            settings: {
                title: 'Test',
                currency: 'PEN',
                amount: 8000,
            },
            client: {
                email: 'test@gmail.com'
            }
        };
    },
    mounted() {

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
        async createCulqui() {
            try {
                const config = {
                    settings: this.settings, 
                    client: this.client,
                };
                const Culqi = new CulqiCheckout('pk_test_f1557f2f26c65043', config); // Use the publicKey prop
                Culqi.open();
            } catch (error) {
                console.error('Error opening Culqi checkout:', error);
                this.showError('Failed to open payment form.');
            }
        },
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

                const paymentResponse = await axios.post(this.openpay.endpoint_payment, {
                    amount: this.amount,
                    currency: this.currency,
                    description: this.description,
                    deviceSessionId: this.openpay.deviceSessionId,
                    email: this.cardData.email,
                    last_name: this.cardData.cardholder,
                    name: this.cardData.cardholder,
                    token: this.openpay.token,
                    account_id: this.payment.account_id,
                    payment_id: this.payment.id,
                });

                this.loader = false;
                window.location.reload();

            } catch (error) {
                this.loader = false;
                this.showError(error.data.description)
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

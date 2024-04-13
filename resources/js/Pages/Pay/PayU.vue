<template>
    <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">
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

                    <input name="merchantId" type="hidden" :value="merchantId">
                    <input name="accountId" type="hidden" :value="accountId">
                    <input name="description" type="hidden" :value="payment.description">
                    <input name="referenceCode" type="hidden" :value="payment.reference_code">
                    <input name="amount" type="hidden" :value="payment.amount">
                    <input name="currency" type="hidden" :value="payment.currency">
                    <input name="signature" type="hidden" :value="signature">
                    <input name="test" type="hidden" value="1">
                    <input name="responseUrl" type="hidden" :value="successURL">
                    <input name="confirmationUrl" type="hidden" :value="confirmURL">

                    <footer class="mt-2 p-4">
                        <div class="flex justify-center center mb-2" v-if="loader">
                            <Loader />
                        </div>
                        <button v-if="!loader"
                            class="mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                            type="submit">
                            Pay now
                        </button>
                    </footer>
                </div>
            </div>
            <ErrorModal v-if="haveError" :errorText="errorText" @close="handleCloseModal" />
        </div>
    </form>
</template>

<script>
import ErrorModal from './Error.vue';
import Loader from './Loader.vue';

export default {
    props: ['loginKey', 'publicKey', 'apiKey', 'accountId', 'merchantId', 'signature', 'payment', 'confirmURL', 'successURL'],
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

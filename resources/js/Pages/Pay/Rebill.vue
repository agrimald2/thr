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
                <p> {{ publicKey }}</p>
            </div>
            <div class="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                <div class="mb-4">
                    <label for="cardholder" class="block text-sm font-medium text-gray-700">Card Holder</label>
                    <input type="text" id="cardholder" v-model="cardData.cardholder"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div class="mb-4">
                    <label for="dni" class="block text-sm font-medium text-gray-700">DNI</label>
                    <input type="text" id="dni" v-model="cardData.cardholderDNI"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Document number">
                </div>
                <div id="rebill_elements"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['organization_id', 'api_key', 'amount', 'customer', 'payment'],
    data() {
        return {
            cardData: {
                cardholderDNI: '',
                cardholder: '',
                cardNumber: '',
                expired: {
                    month: '',
                    year: '',
                },
                securityCode: '',
                email: 'agrimaldopci18@gmail.com'
            },
            amount: this.amount,
            currency: 'PEN',
            description: 'Pago de prueba',
            card: 'front',
            rebill: {
                organization_id: this.organization_id,
                api_key: this.api_key,
                api_url: import.meta.env.VITE_RB_API_URL,
            },
            rebill_checkout: null,

        };
    },
    mounted() {
        this.rebill_checkout = new Rebill.PhantomSDK(this.rebill);
        this.rebill_checkout.setElements('rebill_elements');
        this.rebill_checkout.setCustomer(this.customer);
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
            this.rebill_checkout.setCardHolder({
                name: this.cardData.cardholder,
                identification: {
                    type: 'DNI',
                    value: this.cardData.cardholderDNI
                }
            }),
                this.rebill_checkout.setTransaction()
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
    margin-top: 3rem;
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

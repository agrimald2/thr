<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="p-6 text-center bg-white shadow-lg rounded-lg">
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
                    <h1 class="text-xl font-semibold text-gray-700 text-center">MONTO / MONEDA</h1>
                    <div class="my-3">
                        <input type="number"
                            class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                            placeholder="Amount" v-model="amount" />
                    </div>
                    <div class="my-3">
                        <select
                            class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                            v-model="currency">
                            <option value="" selected disabled>Currency</option>
                            <option value="USD">USD</option>
                            <option value="PEN">PEN</option>
                            <option value="MXN">MXN</option>
                        </select>
                    </div>
                    <h1 class="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
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
                        <div class="mb-2">
                            <label class="text-gray-700">{{ cardData.expired.month }} / {{ cardData.expired.year
                                }}</label>
                        </div>
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
                    </div>
                </main>
                <footer class="mt-6 p-4">
                    <button
                        class="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                        :disabled="!isValid" @click="onSubmit">
                        Pay now
                    </button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['openpay_id', 'openpay_key'],
    data() {
        return {
            cardData: {
                cardholder: '',
                cardNumber: '',
                expired: {
                    month: '',
                    year: '',
                },
                securityCode: '',
                email: 'agrimaldopci18@gmail.com'
            },
            amount: 100,
            currency: 'PEN',
            description: 'Pago de prueba',
            card: 'front',
            openpay: {
                token: '',
                endpoint_sandbox_openpay: "https://sandbox-api.openpay.pe/v1/",
                endpoint_payment: "/charge",
                deviceSessionId: '',
                openpay_id: this.openpay_id,
                openpay_key: this.openpay_key,
                openpay_sandbox_mode: true,
            }
        };
    },
    mounted() {
        OpenPay.setId(import.meta.env.VITE_OPENPAY_ID);
        OpenPay.setApiKey(import.meta.env.VITE_OPENPAY_PK);
        OpenPay.setSandboxMode(import.meta.env.VITE_OPENPAY_SANDBOX_MODE === 'true');
        this.openpay.deviceSessionId = OpenPay.deviceData.setup();
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
            let card_number = this.noSpaces();
            try {
                // generate token to perform the charge
                const tokenResponse = await new Promise((resolve, reject) => {
                    OpenPay.token.create({
                        "holder_name": this.cardData.cardholder,
                        "card_number": card_number,
                        "cvv2": this.cardData.securityCode,
                        "expiration_month": this.cardData.expired.month,
                        "expiration_year": this.cardData.expired.year
                    }, resolve, reject);
                });

                this.openpay.token = tokenResponse.data.id;

                if (this.openpay.token) {
                    // payment in OpenPay
                    console.log(this.openpay.token, 'Token obtenido:')
                    const paymentResponse = await axios.post(this.openpay.endpoint_payment, {
                        amount: this.amount,
                        currency: this.currency,
                        description: this.description,
                        deviceSessionId: this.openpay.deviceSessionId,
                        email: this.cardData.email,
                        last_name: this.cardData.cardholder,
                        name: this.cardData.cardholder,
                        token: this.openpay.token,
                    });

                    alert(`You did it ${this.cardData.cardholder}.`);
                    console.log(paymentResponse);
                }
            } catch (error) {
                console.log(error);
            }
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

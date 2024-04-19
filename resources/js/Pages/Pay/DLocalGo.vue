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
    props: ['payment', 'response', 'error'],
    components: {
        ErrorModal,
        Loader
    },
    data() {
        return {
            loader: false,
            haveError: false,
            errorText: '',
            amount: this.payment.amount,
            currency: this.payment.currency,
            description: this.payment.description,
        };
    },
    mounted() {
        console.log(this.response);
    },
    computed: {
        isValid() {
            return true;
        }
    },
    methods: {
        onSubmit() {
            this.pay();
        },
        pay() {
            this.loader = true;
            console.log(this.response.redirect_url)
            window.location.href = this.response.redirect_url;
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

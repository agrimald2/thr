<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="p-6 text-center bg-white shadow-lg rounded-lg">
            <div class="max-w-md mx-auto shadow-lg rounded-xl bg-white p-6">
                <div class="mb-5">
                    <h1 class="text-3xl font-semibold text-gray-800 my-3">¡Pagado!</h1>
                    <i class="fa-solid fa-file-invoice-dollar" style="font-size: 3rem; color: green;"></i>
                </div>
                <div class="text-2xl font-semibold text-gray-800">
                    <span>{{ payment.amount }}</span>
                    <span class="uppercase">{{ payment.currency }}</span>
                </div>
                <p class="text-gray-600 text-sm">
                    {{ payment.reference_code }} | {{ payment.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['payment'],
    components: {

    },
    data() {
        return {

        };
    },
    mounted() {

    },
    computed: {

    },
    methods: {

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

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Table from './Table.vue';
import { ref } from 'vue';
import axios from 'axios';

const showFilters = ref(false);

function toggleFilters() {
    showFilters.value = !showFilters.value;
}
</script>

<template>
    <AppLayout title="Payments">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="start-date">
                                Inicio
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="start-date" type="date">
                        </div>
                        <div class="w-full md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="end-date">
                                Fin
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="end-date" type="date">
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="search-input">
                                Búsqueda
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="search-input" type="text" placeholder="COD REFERENCIA / DESCRIPCIÓN">
                        </div>
                    </div>
                    <div class="flex justify-between items-center mb-6">
                        <button @click="toggleFilters"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Más filtros
                        </button>
                        <button
                            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            <i class="fas fa-file-excel"></i> Exportar Excel
                        </button>
                    </div>
                    <div v-if="showFilters" class="flex flex-wrap -mx-3">
                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="currency-select">
                                Moneda
                            </label>
                            <select
                                class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="currency-select">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                            </select>
                        </div>
                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="gateway-select">
                                Pasarela
                            </label>
                            <select
                                class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="gateway-select">
                                <option>Pasarela 1</option>
                                <option>Pasarela 2</option>
                            </select>
                        </div>
                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="account-select">
                                Cuenta
                            </label>
                            <select
                                class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="account-select">
                                <option>Cuenta 1</option>
                                <option>Cuenta 2</option>
                            </select>
                        </div>
                        <div class="w-full md:w-1/4 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="status-select">
                                Estado
                            </label>
                            <select
                                class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="status-select">
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button
                    class="my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" @click="$inertia.visit('/dashboard/payments/create')">
                    Nuevo
                </button>
                <div class="mt-2 p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Table :payments="payments" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
export default {
    props: {
        // Define the props if any are passed to this component
    },
    data() {
        return {
            payments: []
        };
    },
    methods: {
        async getPayments() {
            try {
                const response = await axios.get('/api/payments');
                this.payments = response.data;
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        }
    },
    created() {
        this.getPayments();
    }
};
</script>
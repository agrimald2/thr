<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Table from './Table.vue';
import { ref } from 'vue';
import axios from 'axios';

</script>
<template>
    <AppLayout title="Payments">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <h1 class="text-xl font-semibold mb-4">Create a Payment Link</h1>
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div>
                            <label for="amount_usd" class="block text-sm font-medium text-gray-700">Amount in
                                USD</label>
                            <input type="number" id="amount_usd" v-model="form.amount_usd" required
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label for="currency" class="block text-sm font-medium text-gray-700">Currency</label>
                            <select id="currency" v-model="form.currency" required
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                <option v-for="currency in currencies" :value="currency.abbreviation">
                                    {{ currency.abbreviation }} | {{ currency.tc }}</option>
                            </select>
                        </div>
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea id="description" v-model="form.description"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                        </div>
                        <div>
                            <label for="billed" class="flex items-center">
                                <input type="checkbox" id="billed" v-model="form.billed"
                                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <span class="ml-2 text-sm text-gray-700">Billed</span>
                            </label>
                        </div>
                        <div>
                            <label for="currency" class="block text-sm font-medium text-gray-700">Account</label>
                            <select id="currency" v-model="form.account_id" 
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                <option v-for="account in accounts" :value="account.id">{{ account.legal_representative
                                    }} |{{ account.payment_gateway }}</option>
                            </select>
                        </div>
                        <div>
                            <label for="redirect_link" class="block text-sm font-medium text-gray-700">Redirect
                                Link</label>
                            <input type="url" id="redirect_link" v-model="form.redirect_link"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div class="flex justify-end">
                            <button type="submit"
                                class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Create
                                Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
export default {
    props: ['accounts', 'currencies'],
    data() {
        return {
            form: {
                amount_usd: '',
                currency: '',
                description: '',
                billed: false,
                redirect_link: '',
                account_id: ''
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('/api/payments', this.form);
                this.$inertia.visit('/dashboard/payments');
            } catch (error) {
                // Handle error (e.g., show error messages)
            }
        }
    }
};
</script>
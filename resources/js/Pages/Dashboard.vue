<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import KPI from './Examples/KPI.vue';
import BarChat from './Examples/BarChat.vue';
import Welcome from '@/Components/Welcome.vue';
import { ref } from 'vue';
// Import Chart component if you have one, or use a library like Chart.js directly

// Example data for selects and table
const selectOptions = ref([
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
]);

const tableData = ref([
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    { id: 3, name: 'Item 3', value: 'Value 3' },
]);

const selectedDate = ref('');
const selectedOption1 = ref('');
const selectedOption2 = ref('');
const selectedOption3 = ref('');
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-5">
                    <!-- Filters -->
                    <div class="w-full mb-5">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <input type="date" v-model="selectedDate"
                                class="border p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 col-span-1">
                            <select v-model="selectedOption1"
                                class="border p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 col-span-1">
                                <option v-for="option in selectOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                            <select v-model="selectedOption2"
                                class="border p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 col-span-1">
                                <option v-for="option in selectOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                            <select v-model="selectedOption3"
                                class="border p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 col-span-1">
                                <option v-for="option in selectOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- KPIs -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                        <div class="bg-blue-100 p-1 rounded shadow">
                            <KPI />
                        </div>
                        <div class="bg-green-100 p-1 rounded shadow">
                            <KPI />
                        </div>
                        <div class="bg-red-100 p-1 rounded shadow">
                            <KPI />
                        </div>
                    </div>

                    <!-- Chart -->
                    <div class="mb-5">
                        <!-- Integrate your chart component or library here -->
                        <div class="p-5 bg-gray-100 rounded shadow">
                            <BarChat />
                        </div>
                    </div>

                    <!-- First Table -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-200">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="item in tableData" :key="item.id">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.id }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.name }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.value }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-200">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="item in tableData" :key="item.id">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.id }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.name }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.value }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>./Examples/KPI.vue
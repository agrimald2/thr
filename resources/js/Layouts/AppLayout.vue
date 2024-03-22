<script setup>
import { ref, reactive } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);
// Changed to a reactive object to handle multiple dropdown states
const dropdownStates = reactive({});


const goTo = (path) => {
    if (path) {
        window.location.href = path;
    }
};

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};

// Updated to toggle specific dropdown by key
const toggleDropdown = (key) => {
    if (dropdownStates[key] === undefined) {
        dropdownStates[key] = false;
    }
    dropdownStates[key] = !dropdownStates[key];
};
</script>

<template>
    <div>

        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <nav
                class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar" type="button"
                                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                                    </path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                                <div class="flex center">
                                    <i class="fa-solid fa-gauge ml-2"></i>
                                    <span
                                        class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">System</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar"
                class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a @click.prevent="goTo('/dashboard')"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                                <i class="fa-solid fa-chart-simple"></i>
                                <span class="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a @click.prevent="goTo('/dashboard/payments')"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <span class="ms-3">Payments</span>
                            </a>
                        </li>
                        <li>
                            <a @click.prevent="goTo('/dashboard/payments')"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <span class="ms-3">Cuentas</span>
                            </a>
                        </li>
                        <li>
                            <button @click="toggleDropdown('pasarelasDePago')" type="button"
                                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-pasarelasDePago">
                                <i class="fa-solid fa-puzzle-piece"></i>
                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Pasarelas de
                                    Pago</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-pasarelasDePago" :class="{ 'hidden': !dropdownStates.pasarelasDePago }" class="py-2 space-y-2">
                                <li>
                                    <a @click.prevent="goTo('/openpay')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer">Openpay</a>
                                </li>
                                <li>
                                    <a @click.prevent="goTo('/mercadopago')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer">MercadoPago</a>
                                </li>
                                <li>
                                    <a @click.prevent="goTo('/culqui')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer">Culqui</a>
                                </li>
                                <li>
                                    <a @click.prevent="goTo('/stripe')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer">Stripe</a>
                                </li>
                                <li>
                                    <a @click.prevent="goTo('/apple-pay')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer">Apple
                                        Pay</a>
                                </li>
                                <li>
                                    <a @click.prevent="goTo('/crypto')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer">Crypto</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button @click="toggleDropdown('settings')" type="button"
                                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-settings">
                                <i class="fa-solid fa-gear"></i>
                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Settings</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-settings" :class="{ 'hidden': !dropdownStates.settings }" class="py-2 space-y-2">
                                <li>
                                    <a @click.prevent="goTo('/accounts')"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer">Accounts</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            <div class="p-4 sm:ml-64">
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>

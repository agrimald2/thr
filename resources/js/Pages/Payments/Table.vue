<template> 
<div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div class="p-6 px-0 overflow-scroll">
    <table class="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Fecha</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Cod referencia</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Monto</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Currency</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Monto usd</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Descripción</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Pasarela</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Cuenta</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Estado</th>
          <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id" class="hover:bg-gray-100">
          <td class="p-4 border-b border-gray-200">{{ transaction.fecha }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.codReferencia }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.monto }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.currency }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.montoUsd }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.descripcion }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.pasarela }}</td>
          <td class="p-4 border-b border-gray-200">{{ transaction.cuenta }}</td>
          <td class="p-4 border-b border-gray-200">
            <span :class="{'bg-green-500': transaction.estado === 'PAGADO', 'bg-yellow-500': transaction.estado === 'PENDIENTE'}" class="px-2 py-1 text-white rounded-full">
              {{ transaction.estado }}
            </span>
          </td>
          <td class="p-4 border-b border-gray-200">
            <button class="text-blue-500 hover:text-blue-700">
            <i class="fas fa-eye"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue';

const transactions = ref([
  { id: 1, fecha: '2023-01-01', codReferencia: 'REF123', monto: '100.00', currency: 'USD', montoUsd: '100.00', descripcion: 'Pago de servicios', pasarela: 'Stripe', cuenta: 'Cuenta 1', estado: 'PAGADO' },
  { id: 2, fecha: '2023-01-02', codReferencia: 'REF456', monto: '200.00', currency: 'EUR', montoUsd: '215.00', descripcion: 'Compra de software', pasarela: 'PayPal', cuenta: 'Cuenta 2', estado: 'PENDIENTE' },
  // Add more transactions as needed
]);
</script>
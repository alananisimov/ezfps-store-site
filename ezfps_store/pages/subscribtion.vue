<template>
    <div class="bg-white py-24 sm:py-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Join thousands of satisfied customers who have already transformed their PCs with our subscription service. Don't let performance issues hold you back any longer. Take the first step towards a faster, more efficient PC by subscribing today!</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div class="p-8 sm:p-10 lg:flex-auto">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p class="mt-6 text-base leading-7 text-gray-600">Supercharge your PC with our Performance Maximizer Plan - subscribe now and unleash its true power!</p>
            <div class="mt-10 flex items-center gap-x-4">
              <h4 class="flex-none text-sm font-semibold leading-6 text-orange-600">What’s included</h4>
              <div class="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-3">
                <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div class="mx-auto max-w-xs px-8">
                <p class="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span class="text-5xl font-bold tracking-tight text-gray-900">$20</span>
                  <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a href="https://t.me/ezfps_bot" target="_blank" class="mt-10 block w-full rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a>
                <p class="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CheckIcon } from '@heroicons/vue/20/solid'
  
  const includedFeatures = [
    'Tech Support',
    'Lifetime access',
    'All feautures of programm',
    'Get all updates earlier',
  ]
  </script>
<template>
    <div class="w-full px-4 pt-16">
    <h2 class="text-4xl font-bold dark:text-white my-16 text-center justify-center ">FAQ</h2>
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2 mb-64">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-orange-200 px-4 py-2 text-left text-sm font-medium text-orange-600 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
          >
            <span>Что такое ezfps?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-orange-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            Ezfps это программа для оптимизации пк с <a href="https://github.com/alananisimov/ezfps-app-site" class="underline">открытым исходным кодом</a> основанная на .ps1 скриптах. Наша цель создать лучший из возможных оптимизаторов для Windows. 
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-orange-200 px-4 py-2 text-left text-sm font-medium text-orange-600 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
          >
            <span>Нуждаетесь в технической поддержке?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-orange-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            Свяжитесь с нами через <a href="https://t.me/hollz69" target="_blank" class="underline">telegram</a>. Мы постараемя ответить вам скорее 
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'
  </script>
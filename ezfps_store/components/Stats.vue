<template>
    <div class="w-full px-4 pt-16">
      <div class="mx-auto max-w-2xl lg:text-center my-16">
        <h2 class="text-base font-semibold leading-7 text-orange-600">Вопросы</h2>
    <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Часто задаваемые вопросы</h2>
    <p class="mt-6 text-lg leading-8 text-gray-600">Мы стараемся ответить на ваши самые часто задаваемые вопросы здесь. Больше в нашем telegram боте</p>
    </div>
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2 mb-32">
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
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm sm:text-md text-gray-500">
            Ezfps это программа для оптимизации пк с <a href="https://github.com/alananisimov/ezfpsAppSite" class="underline">открытым исходным кодом</a> основанная на кастомных ps1 и bash скриптах. Наша цель создать лучший из возможных оптимизаторов для всех операционных систем. 
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
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm sm:text-md text-gray-500">
            Свяжитесь с нами через <a href="https://t.me/hollz69" target="_blank" class="underline">telegram</a>. Мы постараемя ответить вам как можно скорее 
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'
  </script>
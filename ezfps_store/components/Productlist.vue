<template>
  <div class="bg-white tall:py-6 lg:-mt-48">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-orange-600">Проекты</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наши проекты и системы</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Наши продукты максимально эффективно выполняют свою цель - оптимизируют ваш пк и удаляют лишние кэш файлы</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <NuxtImg :src="feature.icon" :alt="feature.alt" width="30px" height="30px"/>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'ezfps app',
      description:
        'Приложение на Windows для оптимизации пк без лишних действий',
      icon: "/favicon_small.png",
      alt: "ezfps logo"
    },
    {
      name: 'Telegram Bot',
      description:
        'Телеграм бот для продажи временный подписок для приложения ezfps',
      icon: 'telegram.svg',
      alt: "telegram logo"
    }
  ]
  </script>
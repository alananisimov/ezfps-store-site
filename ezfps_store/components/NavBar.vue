<template>
  <div class="bg-white scroll-smooth">
    <header class="bg-white isolation-auto">
    <nav class="mx-auto flex z-50 max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 relative">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">ezfps project</span>
          <NuxtLink to="/"><NuxtImg class="h-8 w-auto" src="/favicon_small.png" height="32" width="32" alt="ezfps logo" /></NuxtLink>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 ">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Наши продукты
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <a @click="navigateTo(item.href, {external: item.external})" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" @click="navigateTo(item.href, {external: item.external})" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <NuxtLink to="/subscribtion"><a class="text-sm font-semibold leading-6 text-gray-900">Подписаться</a></NuxtLink>
        <NuxtLink to="/about"><a class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">О нас</a></NuxtLink>
        <NuxtLink><a href="https://docs.ezfps.store"><a class="text-sm font-semibold leading-6 text-gray-900">Начать!</a></a></NuxtLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-x-3">
        <NuxtLink to="/profile"><span v-if="user" class="bg-gray-100 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded border border-black mx-5 cursor-pointer">Аккаунт</span></NuxtLink>
        <NuxtLink to="/signin"><a v-if="user == null" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Войти <span aria-hidden="true">&rarr;</span></a></NuxtLink>
        <a @click="log_out" v-if="user" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Выйти <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"></div>
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">ezfps</span>
            <NuxtLink to="/"><NuxtImg class="h-8 w-auto" src="/favicon_small.png" height="32" width="32" alt="ezfps logo" /></NuxtLink>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Наши продукты
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <NuxtLink v-for="item in [...products, ...callsToAction]" :to="item.href"> <DisclosureButton @click="closeMenu()" :key="item.name" as="a" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton></NuxtLink>
                </DisclosurePanel>
              </Disclosure>
              <NuxtLink to="/subscribtion"><a class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="closeMenu()">Подписаться</a></NuxtLink>
              <NuxtLink to="/about"><a class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="closeMenu()">О нас</a></NuxtLink>
              <NuxtLink><a href="https://docs.ezfps.store"><a class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="closeMenu()">Начать!</a></a></NuxtLink>
            </div>
            <div class="py-6">
              <NuxtLink to="/profile"><a @click="closeMenu()" v-if="user" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Аккаунт</a></NuxtLink>
              <NuxtLink to="/signin"> <a v-if="user == null" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="closeMenu()">Войти</a></NuxtLink>
              <a @click="log_out && closeMenu()" v-if="user" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Выйти</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

      
        <Banner/>
        <NuxtPage/>
      
     
        <footer class="p-4 bg-white sm:p-6">
    <div class="mx-auto max-w-screen-xl">
        
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://ezfps.store" class="hover:underline">ezfps™</a>. All Rights Reserved.
            </span>
            <div class="flex space-x-6 sm:justify-center mt-0">
              
                <a href="https://github.com/alananisimov" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
                <a href="https://t.me/ezfps_bot" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"/></svg>
                </a>
            </div>
        </div>
    </div>
</footer>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const supabase = useSupabaseClient()
const { data: { user } } = await supabase.auth.getUser()
async function log_out(){
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
const closeMenu = () => {
  mobileMenuOpen.value = false
}
const {data: { session }} = await supabase.auth.getSession()

const products = [
  { name: 'ezfps app', description: 'Современный оптимизатор ПК', href: '/download', icon: ComputerDesktopIcon, external: false },
  { name: 'telegram bot', description: 'Купить доступ к нашему оптимизатору', href: 'https://t.me/ezfps_bot', icon: ShoppingBagIcon, external: true },
  { name: 'mobile optimizer: скоро', description: 'Оптимизируй свой телефон без проблем', href: '#', icon: DevicePhoneMobileIcon, external: false }
]

const callsToAction = [
  
]

const mobileMenuOpen = ref(false)
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
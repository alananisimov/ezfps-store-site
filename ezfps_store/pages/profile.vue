<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <form class="w-full relative isolate">
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#f88030] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#fca889] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
        <div class="mx-auto space-y-12 m-4 p-4 max-w-md">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Аккаунт</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Основная информация о вашем аккаунте</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-full">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:w-full">

                                <p v-if="user.user_metadata"
                                    class="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                                    {{ user.user_metadata.full_name }}</p>
                                <p v-if="user"
                                    class="px-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                                    {{ user.email }}</p>
                            </div>
                        </div>
                    </div>


                    
                    <div
                        class="col-span-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                        </svg>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Статус
                                подписки: <br/>{{ roleTable[roleValue["role"]] }}</h5>
                        </a>
                        <p v-if="sub_end_time" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ sub_end_time }}</p>
                        <p v-else class="mb-3 font-normal text-gray-500 dark:text-gray-400"> <span>Вы можете купить подписку в нашем <a href='https://t.me/ezfps_bot' target='_blank' class="underline">telegram боте</a></span></p>
                        <NuxtLink to="https://docs.ezfps.store"> <a class="inline-flex items-center text-blue-600 hover:underline">
                            Посмотреть гайд
                            <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a></NuxtLink>
                    </div>
                    <div class="w-full col-span-full">
                    <div class="" v-if="user.user_metadata.picture" >
                        <label for="photo" class=" text-sm font-medium leading-6 text-gray-900">Фото профиля</label>
                        <div class="mt-2 flex items-center gap-x-3">
                            <img class="h-12 w-12 text-gray-300 rounded-full" aria-hidden="true" :src="user.user_metadata.picture"/>
                            <button type="button"
                                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            

            <div class="pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Настройки email-рассылки</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Мы будет стараться сообщать вам о важных изменениях, но вы можете
                    выбрать, о чем еще вы хотите услышать.</p>

                <div class="mt-10 space-y-10">
                    
                    <fieldset>
                        <legend class="text-sm font-semibold leading-6 text-gray-900">Получать email'лы</legend>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Выберите что вы хотите получать.
                        </p>
                        <div class="mt-6 space-y-6">
                            <div class="flex items-center gap-x-3">
                                <input id="push-everything" name="push-notifications" type="radio"
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label for="push-everything"
                                    class="block text-sm font-medium leading-6 text-gray-900">Всё</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="push-email" name="push-notifications" type="radio"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Только информацию связанную с моим аккаунтом</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <input id="push-nothing" name="push-notifications" type="radio"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Ничего</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>

  
</form></template>
  
<script setup>
const roleTable = {
    "user": "Обычный юзер",
    "tguser": "Обычный юзер",
    "buyers": "Подписчик",
    "admin": "Админ"
}
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const {data: role} = await supabase.from("profiles").select("role").eq("email", user.value.email)
const roleValue = role[0]
const {data: sub_end} = await supabase.from("profiles").select("expiration_date").eq("email", user.value.email)
const sub_end_time = sub_end ? sub_end[0]["expiration_date"]: null

console.log(sub_end_time)
</script>
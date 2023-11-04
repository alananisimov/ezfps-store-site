<template>
    <section class="bg-white h-screen">
       
  <div class=" py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-12 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Лучшее предложение именно для вас</h2>
          <p class="text-gray-500 sm:text-xl">Здесь в ezfps мы предлагаем лучший продукт на рынке</p>
      </div>
      <div class="space-y-8 mx-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div class="border-2 rounded-[30px] border-black p-8 hover:bg-gray-200">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 ">
                <MacosLogo />
              </div>
              <h3 class="mb-2 text-xl font-bold">Windows</h3>
              <p class="pb-5 text-gray-500">Оптимизируй свой ПК для игр за пару секунд</p>
              <a type="button" href="/ezfps Setup 1.0.0.exe" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Скачать для Windows
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
          <div class="border-2 rounded-[30px] border-black p-8 hover:bg-gray-200">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <WindowsLogo/>
              </div>
              <h3 class="mb-2 text-xl font-bold">MacOS</h3>
              <p class="pb-11 text-gray-500">Уже доступно</p>
              <a type="button" href="/ezfps-1.0.0-arm64.dmg" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    Скачать для MacOS
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
          <div class="border-2 rounded-[30px] border-black p-8 hover:bg-gray-200">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
               <LinuxLogo/>
              </div>
              <h3 class="mb-2 text-xl font-bold">Linux</h3>
              <p class="pb-11 text-gray-500">Уже доступно</p>
              <a type="button" href="/ezfps.app_1.0.0_amd64.snap" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    Скачать для Linux
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
      </div>
  </div>
</section >
</template>
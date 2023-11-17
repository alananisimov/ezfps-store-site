<template>
  
  <div class="overflow-hidden bg-white pb-16 sm:pt-0 sm:py-0 sm:pb-16 text-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg my-16 sm:my-24 max-[400px]:my-auto">
            <NuxtLink href="https://docs.ezfps.store/guide"><a
                class="mb-14 justify-between items-center py-1 px-1 pr-4 sm:mb-7 text-sm text-gray-700 bg-gray-100 rounded-full inline-flex"
                role="alert">
                <span
                  class="text-xs bg-gradient-to-r to-red-600 from-orange-400 rounded-full text-white px-4 py-1.5 mr-3 ">Новинка</span>
                <span class="text-sm font-medium inline-flex">ezfps вышел. <span class="hidden sm:flex ml-1">Зацени
                    сейчас!</span></span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a></NuxtLink>
            <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Интуитивно понятный <span
                class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400">оптимизатор</span></h1>
            <p class=" mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">Наш главный проект
              ezfps app помогает оптимизировать пк для игр и других приложений.</p>
              
            <div class="lg:mx-12 flex flex-col lg:gap-y-3 mb-8 lg:mb-16 space-y-4 sm:flex-row lg:flex-col sm:justify-center sm:space-y-0 sm:space-x-4 lg:space-x-0">
              <a @click="()=>navigateTo('/download')"
                class="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-white rounded-lg border border-orange-600 hover:bg-orange-200 focus:ring-4 focus:ring-orange-400 dark:focus:ring-primary-900 mx-2 sm:mx-0">
                <span class="inline-flex text-orange-600 font-bold">Скачать для <span class="inline-flex mt-0.5">
                    <MacosLogo class="ml-4" />
                    <LinuxLogo class="ml-2" />
                    <WindowsLogo class="ml-2" />
                  </span> </span>
              <svg class="ml-3 -mr-1 w-5 h-5 fill-orange-500" fill="" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="https://t.me/ezfps_bot"
              class="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-400 dark:focus:ring-primary-900 mx-2 sm:mx-0 ">
              Начать бесплатный период
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>

          </div>
          
        </div>
      </div>
      <div class="hidden lg:block">
      <Pudge />
      </div>
    </div>
  </div>
</div>
  
</template>
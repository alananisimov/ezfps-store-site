<template>
  <section class="bg-white ">
    <div v-if="newerror == true" id="alert-2" class="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Info</span>
      <div class="ml-3 text-sm font-medium">
        {{ errortext }}
      </div>
      <button type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
        @click="emailverification = false" data-dismiss-target="#alert-2" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-col items-center mt-10 px-6 mx-auto h-screen sm:mt-14">

      <div class="w-full bg-white rounded-lg md:mt-0 md:max-w-lg sm:max-w-md mx-16 xl:p-0">
        <div class="space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="hidden text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center justify-center items-center mb-5 tall:flex">
            Войти
          </h1>
          <form class="space-y-4 md:space-y-6 " @submit.prevent="handleLogin">
            <div v-if="platform == 'unknown'" class="inline-flex items-center justify-center w-full">
              <button @click="GoogleOauthLogin" type="button"
                class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-10 sm:px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <svg class="w-4 h-4 sm:mr-2 sm:-ml-1 ml-1" aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                  </path>
                </svg>
                <p class="text-white form-medium text-sm hidden sm:flex">Войти через Google</p>
              </button>
              <button @click="GithubOauthLogin" type="button"
                class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-10 sm:px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                <svg class="w-4 h-4 sm:mr-2 sm:-ml-1 ml-1" aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                  </path>
                </svg>
                <p class="text-white form-medium text-sm hidden sm:flex">Войти через GitHub</p>
              </button>
            </div>
            <div v-if="platform == 'unknown'" class="inline-flex items-center justify-center w-full">
              <hr class="w-full h-px my-4 bg-gray-200 border-0">
              <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">или</span>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Ваш email</label>
              <input type="email" name="email" id="email" v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="elonmusk@usa.com" required="true">
            </div>
            <div class="select-none">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Пароль</label>
              <div class="inline-flex w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
                <input name="password" v-model="password" id="password" :type="passwordVisible ? 'text' : 'password'"
                  :placeholder="passwordVisible ? '' : '•••••'"
                  class="rounded-lg border-transparent focus:border w-full p-2.5 focus:ring-orange-500 focus:border-orange-500"
                  required="true">
                <!-- Add an eye icon to toggle password visibility -->
                <span @click="togglePasswordVisibility" class="cursor-pointer w-fit pt-2.5 px-2">
                  <span v-if="passwordVisible"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" />
                    </svg></span>
                  <span v-else class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4z"
                        fill="currentColor" />
                      <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2z" fill="currentColor" />
                    </svg></span>
                </span>
              </div>
            </div>
            <div class="select-none">
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Подтвердите
                пароль</label>
              <div class="inline-flex w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
                <input :type="password1Visible ? 'text' : 'password'" name="confirm-password" id="confirm-password"
                  :placeholder="password1Visible ? '' : '•••••'"
                  class="rounded-lg border-transparent focus:border w-full p-2.5 focus:ring-orange-500 focus:border-orange-500"
                  required="true">
                <span @click="toggle1PasswordVisibility" class="cursor-pointer w-fit pt-2.5 px-2">
                  <span v-if="password1Visible"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" />
                    </svg></span>
                  <span v-else class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4z"
                        fill="currentColor" />
                      <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2z" fill="currentColor" />
                    </svg></span>
                </span>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required="">
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500">Я принимаю <a
                    class="font-medium text-orange-600 hover:underline " href="#">Правила и поглашения</a></label>
              </div>
            </div>
            <button type="submit"
              class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Войти</button>
            <p class="text-sm font-light text-gray-500 ">
              Нет аккаунта? <NuxtLink to="/signup"><a href="#"
                  class="text-orange-600 hover:underline font-medium">Зарегистрируйтесь</a></NuxtLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  <component :is="'script'" src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive">
  </component>
</template>
<script setup>
const supabase = useSupabaseClient()
const newerror = ref(false)
const errortext = ref('')
const isTelegram = ref('')
const platform = ref('unknown')
const loading = ref(false)
const email = ref('')
const config = useRuntimeConfig()
const site_url = config.public.SITE_URL
const password = ref('')
const GoogleOauthLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: site_url + "/"
    }
  })
  if (error) throw error
  if (data) {
    loading.value = false
    navigateTo("/")
  }
}
const GithubOauthLogin = async () => {

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: site_url + "/"
    }
  })
  if (error) throw error
  if (data) {
    loading.value = false
    navigateTo("/")
  }
}
const handleLogin = async () => {
  newerror.value = false
  loading.value = true
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
    redirectTo: site_url

  })
  if (error) {
    newerror.value = true
    errortext.value = error.message
  }
  if (data && error == null) closeWebApp(); loading.value = false; navigateTo("/")

}
const passwordVisible = ref(false);
const password1Visible = ref(false)
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const toggle1PasswordVisibility = () => {
  password1Visible.value = !password1Visible.value;
};
let closeWebApp = () => {
  if (process.browser) {
    console.log(email.value)
    window.Telegram.WebApp.sendData(`{"email": "${email.value}"}`)
  }
}
watchEffect(() => {
  if (process.browser) {
    if (window.Telegram) platform.value = window.Telegram.WebApp.platform
    // console.log(window.Telegram.WebApp.platform == "unknown", "is not TG BOT")

  }


})
</script>
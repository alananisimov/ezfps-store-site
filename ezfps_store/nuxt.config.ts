// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', "@nuxtjs/i18n"],
  i18n: {
    // Adding English-Canada and Arabic-Egypt
    // as our supported locales. You can add as
    // many locales as you want here.
    locales: ["en", "ru"],

    // Used when active locale is not explicitly defined
    defaultLocale: "ru",

    // Disabling automatic locale detection (see below)
    detectBrowserLanguage: true,
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        en: {
          start_trial: 'We create a real product'
        },
        ru: {
          start_trial : 'Мы создаём реальный продукт'
        }
      },
  },
},
  extends: '@nuxt-themes/docus',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
})

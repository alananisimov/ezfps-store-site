// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', "@nuxtjs/i18n"],
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    
      fallbackLocale: 'ru',
      messages: {
        en: {
          start_trial: 'We create a real product'
        },
        ru: {
          start_trial: 'Мы создаём реальный продукт'
        }
      
    }
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

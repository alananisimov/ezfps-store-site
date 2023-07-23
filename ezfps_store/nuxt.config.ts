// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode'],
  extends: '@nuxt-themes/docus',
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.ezfps.store/icon.png' }
    ]

  },

  colorMode: {
    classSuffix: ''
  },
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

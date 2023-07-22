// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode'],
  extends: '@nuxt-themes/docus',
  serverMiddleware: ['~/server-middleware/testapi.js'],
  colorMode: {
    classSuffix: ''
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icon.png' }
    ]
  },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
})

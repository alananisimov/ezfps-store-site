// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode'],
  extends: '@nuxt-themes/docus',
  pwa: { icon: { source: '~/static/icon.png' } },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa'
  ],
})

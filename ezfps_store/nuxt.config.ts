// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode'],
  extends: '@nuxt-themes/docus',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
    }
  },
  
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa'
  ],
})

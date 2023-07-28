// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode', '@nuxthq/ui'],
  extends: '@nuxt-themes/docus',
  ui: {
    primary: 'orange',
    gray: 'cool',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 right-0'
    }

  },
  ssr: true,
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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode', '@nuxthq/ui', "@tresjs/nuxt", 'nuxt-headlessui', 'nuxt-og-image', '@nuxtjs/robots', 'nuxt-simple-sitemap', 'nuxt-schema-org'],
  extends: ['@nuxt-themes/docus'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000/',
      siteName: 'ezfps store',
      siteDescription: 'ezfps: Оптимизируй ПК без проблем',
      language: 'ru', // prefer more explicit language codes like `en-AU` over `en`
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
  
})

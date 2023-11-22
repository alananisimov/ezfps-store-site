// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    "@nuxthq/ui",
    "nuxt-headlessui",
    "@nuxtseo/module",
    "@nuxt/image",
    "@nuxtjs/partytown",
    "nuxt-lazy-hydrate",
  ],
  ssr: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
    },
  },
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      SITE_URL: process.env.SITE_URL,
      BANNER_OPEN: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: "https://ezfps.store",
    name: "ezfps PC booster",
    description: "Optimize your PC faster and lighter when ever!",
    defaultLocale: "ru",
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
    },
  },
});

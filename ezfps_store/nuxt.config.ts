// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    "@nuxthq/ui",
    "@tresjs/nuxt",
    "nuxt-headlessui",
    "@nuxtseo/module",
    "@nuxt/image",
    "@nuxtjs/partytown",
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
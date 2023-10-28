// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    "@nuxthq/ui",
    "@tresjs/nuxt",
    "nuxt-headlessui",
    "@nuxtseo/module",
    "nuxt-delay-hydration",
  ],
  extends: ["@nuxt-themes/docus"],
  ssr: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
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
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
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

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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
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

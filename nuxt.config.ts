// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: './',
  },

  modules: [
    // https://vueuse.org/
    '@vueuse/nuxt',

    // https://pinia.vuejs.org/
    '@pinia/nuxt',

    // https://ui.nuxt.com/
    '@nuxt/ui',

    // https://image.nuxt.com
    '@nuxt/image',

    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',

    // https://nuxt.com/modules/electron
    'nuxt-electron',
  ],

  css: ['assets/main.css'],

  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },

  electron: {
    include: ['electron'],
    outDir: 'dist-electron',
  },

  compatibilityDate: '2024-09-29',
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: './',
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',

    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',

    // https://v1.image.nuxtjs.org/
    '@nuxt/image-edge',

    // https://nuxt.com/modules/icon
    'nuxt-icon',

    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',

    // https://nuxt.com/modules/electron
    'nuxt-electron',
  ],
  css: ['@unocss/reset/tailwind.css', 'assets/main.css'],
  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },
  electron: {
    include: ['electron'],
    outDir: 'dist-electron',
  },
})

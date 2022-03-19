module.exports = {
  content: [
    './packages/renderer/index.html',
    './packages/renderer/src/App.vue',
    './packages/renderer/src/pages/**/*.{vue,js,ts}',
    './packages/renderer/src/components/**/*.{vue,js,ts}',
    './packages/renderer/src/styles/**/*.{vue,js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

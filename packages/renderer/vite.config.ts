import { defineConfig } from 'vite'
import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: __dirname,
  plugins: [
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
  ],
  base: './',
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@headlessui/vue',
      '@heroicons/vue/solid',
      '@heroicons/vue/outline',
    ],
  },
})

import { defineConfig } from 'vitest/config'
import config from './vite.config'

export default defineConfig({
  ...config,
  test: {
    include: ['./tests/**/*.{test,spec}.{js,ts}'],
    passWithNoTests: true,
    environment: 'jsdom',
  },
})

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./tests/**/*.{test,spec}.{js,ts}'],
    testTimeout: 30000,
    hookTimeout: 30000,
    passWithNoTests: true,
  },
})

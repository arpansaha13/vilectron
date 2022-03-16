import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import pkg from '../../package.json'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/main',
    emptyOutDir: true,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    minify: process.env.NODE_ENV === 'production', /* from mode option */
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules, // node built in modules
        ...Object.keys(pkg.dependencies ?? {}), // project dependencies
      ],
    },
  },
})

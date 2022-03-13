import { build } from 'vite'

// Build main
await build({ configFile: 'packages/main/vite.config.ts' })

// Build preload
await build({ configFile: 'packages/preload/vite.config.ts' })

// Build renderer
await build({ configFile: 'packages/renderer/vite.config.ts' })

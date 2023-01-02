<h1 align="center">
  Vilectron
</h1>

<p align="center" style="">
  Simple Electron-Vite starter template with VueJs.
</p>

<div align="center">
  <img src="https://user-images.githubusercontent.com/82361490/210195382-c8a5910b-60c5-4b32-abf9-e90db71fd6cf.png" alt="Vilectron preview" />
</div>

<br>

❤ Inspired from [Vitesse](https://github.com/antfu/vitesse)

# Pre-packed

- [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- [UnoCSS](https://github.com/unocss) - The instant on-demand atomic CSS engine
- [Pinia](https://pinia.vuejs.org) - The Vue Store that you will enjoy using
- [Vitest](https://vitest.dev) - Blazing Fast Unit Test Framework
- [TypeScript](https://www.typescriptlang.org) - Why not?!

# Features

- Testing with [Vitest](https://vitest.dev) and [Playwright](https://playwright.dev/)
- Ready-to-use theme-switching (light and dark mode)
- File-based routing with [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- Layout system with [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- Auto-imports with [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

# Deps versions

- [Vue](https://vuejs.org/) - v3
- [Vite](https://vitejs.dev/) - v4
- [Electron](https://www.electronjs.org/) - v22

> If you use a different Node version other than **v16**, remember to update the version in `engines.node` in package.json.

# Quick start

### Run dev server

Run the dev server in an electron app:
```bash
pnpm electron:dev
```

Run the app in the browser instead:
```bash
pnpm dev
```

### Build the app

Build the electron app:
```bash
pnpm electron:build
```

Build the app for the browser only:
```bash
pnpm build
```

### Package/Release

Package your app:
```bash
pnpm electron:release
```

This will run `electron-builder` to package your app.

# Variations

- [With tailwind](https://github.com/arpansaha13/vilectron/tree/tailwind-postcss) - Use Tailwind with PostCSS instead of UnoCSS

# Checklist

When you use this template, try to follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue` in `packages/renderer`
- [ ] Change the favicon in `packages/renderer/public`
- [ ] Clean up the READMEs and remove routes
- [ ] Change `author`, `name`, `version` and `description` in `package.json`
- [ ] Remove or change `repository` and `bugs` in `package.json`

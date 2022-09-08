<h1 align="center">
  Vilectron
</h1>

<p align="center">
  Simple Electron-Vite starter template with VueJs.
</p>

<br>

❤ Inspired from [Vitesse](https://github.com/antfu/vitesse)

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

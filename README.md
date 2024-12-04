> [!CAUTION]
> **Archived**. This project is archived, no longer maintained and may soon be removed.

<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Deku
- Package name: deku-ui
- Description: Nuxt module with just the basics
-->

# Deku

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<div style="text-align:center;">
<img alt="Deku nut sticker from super smash bros" src=".github/images/deku-nut-sticker.png">
<p><a href="https://zeldawiki.wiki/wiki/Deku_Nut">Deku</a> is a <em>stunning</em> Nuxt 3 module (with just the basics).</p>
</div>

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/deku-ui?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Some components
- 🚠 &nbsp;Some helpers
- 🌲 &nbsp;Some bits and bobs

## Quick Setup

1. Add `deku-ui` dependency to your project

```bash
# Using pnpm
pnpm add -D deku-ui

# Using yarn
yarn add --dev deku-ui

# Using npm
npm install --save-dev deku-ui
```

2. Add `deku-ui` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'deku-ui'
  ],
  deku: {
    // Options
  }
})
```

That's it! You can now use Deku in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/deku-ui/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/deku-ui

[npm-downloads-src]: https://img.shields.io/npm/dm/deku-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/deku-ui

[license-src]: https://img.shields.io/npm/l/deku-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/deku-ui

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

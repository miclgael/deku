import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  useBaseStyles: boolean
  usePlugins: boolean
  useComponents: boolean
  useMeta: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'deku-ui',
    configKey: 'deku'
  },

  // Default configuration options of the Nuxt module
  defaults: {
    useBaseStyles: true,
    usePlugins: true,
    useComponents: true,
    useMeta: true
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Add CSS
    if (options.useBaseStyles) {
      nuxt.options.css.push(
        resolve('runtime/assets/main.css')
      )
    }

    if (options.useMeta) {
      nuxt.options.app.head.bodyAttrs = {
        ...nuxt.options.app.head.bodyAttrs,
        'data-theme': 'light'
      }
    }

    if (options.usePlugins) {
      // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
      addPlugin(resolve('./runtime/plugin'))
    }

    if (options.useComponents) {
      const components = [
        {
          name: 'DekuTest',
          filePath: resolve('runtime/components/deku-test.vue'),
        },
        {
          name: 'DekuSection',
          filePath: resolve('runtime/components/d-section/d-section.vue')
        },
        {
          name: 'DekuAccordion',
          filePath: resolve('runtime/components/d-accordion/d-accordion.vue')
        },
        {
          name: 'DekuAlert',
          filePath: resolve('runtime/components/d-alert/d-alert.vue')
        },
        {
          name: 'DekuAvatar',
          filePath: resolve('runtime/components/d-avatar/d-avatar.vue')
        },
        {
          name: 'DekuDrawer',
          filePath: resolve('runtime/components/d-drawer/d-drawer.vue')
        }
      ]

      components.forEach((component) => addComponent(component))
    }
  }
})

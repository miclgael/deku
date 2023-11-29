import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'


// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'deku-ui',
    configKey: 'deku'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    console.log(options.anOption);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // From the runtime directory
    addComponent({
      name: 'DekuTest', // name of the component to be used in vue templates
      // export: 'DekuTest', // (optional) if the component is a named (rather than default) export
      filePath: resolver.resolve('runtime/components/deku-test.vue')
    })

  }
})

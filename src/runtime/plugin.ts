import { defineNuxtPlugin } from '#app'

export interface DekuPluginOptions {
  message?: string
}

export default defineNuxtPlugin((nuxtApp) => {
  // Inject $deku(opts) in Vue, context and store.
  const dekuPlugin = (options: DekuPluginOptions) => `Hello ${options.message}!`

  nuxtApp.provide('deku', dekuPlugin)
  // if (process.server) {
  //   console.info('Deku plugin was provided to nuxt app.')
  // }
})

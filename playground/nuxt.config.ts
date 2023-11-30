export default defineNuxtConfig({
  modules: ['../src/module'],
  deku: {
    useBaseStyles: true,
    usePlugins: true,
    useComponents: true,
    useMeta: true
  },
  devtools: { enabled: true }
})

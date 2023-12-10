export const useStyleLayers = (name: string[]) => {
  return (
    useHead({
      link: [
        {
          rel: 'stylesheet',
          href: import(`../assets/layers/${name}.css`)
        }
      ]
    })
  )
}

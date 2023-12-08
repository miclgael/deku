export const useStyleLayers = () => {
  return (
    useHead({
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css'
        }
      ]
    })
  )
}

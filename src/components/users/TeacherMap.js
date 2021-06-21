// import React, { useRef, useEffect } from 'react'
// import mapboxgl from 'mapbox-gl'
// import Tooltip from '../common/Tooltip'
// import ReactDOM from 'react-dom'

// mapboxgl.accessToken = 'pk.eyJ1IjoiZHZsODIiLCJhIjoiY2txNTJlcDR1MGwwODJvcXpqM3Nndmk5ciJ9.SmZ12p97k5fNcSVgNvZySg'

// const Map = () => {
//   const mapContainerRef = useRef(null)
//   const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }))

//   // Initilaize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-1.79, 53.35],
//       zoom: 5,
//     })

//     //change cursor to pointer when user hovers over clickable feature
//     map.on('mouseenter', e => {
//       if (e.features.length) {
//         map.getCanvas().style.cursor = 'pointer'
//       }
//     })

//     // reset cursor to default when user is no longer hovering
//     map.on('mouseleave', () => {
//       map.getCanvas().style.cursor = ''
//     })

//     // add tooltip when users mouse over a point
//     map.on('mouseleave', e => {
//       const features = map.queryRenderedFeatures(e.point)
//       if (features.length) {
//         const feature = features[0]

//         // create tooltip node
//         const tooltipNode = document.createElement('div')
//         ReactDOM.render(<Tooltip feature={feature} />, tooltipNode)

//         // set tooltip on map
//         tooltipRef.current
//           .setLngLat(e.lngLat)
//           .setDOMContent(tooltipNode)
//           .addTo(map)
//       }
//     })

//     // clean up on unmount
//     return () => map.remove()
//   }, [])

//   return (
//     <div>
//       <div className='map-container' ref={mapContainerRef} />
//     </div>
//   )
// }

// export default Map
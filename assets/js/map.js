mapboxgl.accessToken = 'pk.eyJ1IjoiZ29sZGVubWVhbmllIiwiYSI6IjRiNmIyNmI1NDE5MDA1MGRjYzNjNzhhMjNmNjUyN2M1In0.gT4HUhlPjQdEbmS9u4Fs7g';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/goldenmeanie/cjirs8gwb2o8e2snxffn69osy', // style URL
  zoom: 12.94, // starting zoom
  center: [-71.400148, 41.825261] // starting center
});



map.on('load', () => {
  map.loadImage('assets/icons/lilac.png', (error, image) => {
    if (error) throw error;
    map.addImage('lilac', image);
  });

  map.addSource('lilacs', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'assets/json/lilacs.geojson'
  });
  
  map.addLayer({
    'id': 'lilacs-layer',
    'type': 'symbol',
    'source': 'lilacs',
    'layout': {
      'icon-image': 'lilac',
      'icon-size': 0.25
    }
  });
});
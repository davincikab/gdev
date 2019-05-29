let map = L.map('map').setView([ -0.0723876953125,36.056884765625], 12);

L.tileLayer()
let marker = L.marker([-0.2345,37.668]).bindPopup('Home').addTo(map);

let polyline = L.polyline([[-0.2345,37.668],[-0.345,37.668],[-0.45,37.668]]).addTo(map);
// let polygon = L.polygon([[[-0.5345,37.668],[-0.745,37.68],[-0.45,36.668],[-0.5345,37.668]],[]]).addTo(map);

let geojson_layer = L.geoJson([nakuru]);
map.addLayer(geojson_layer);

// Declare a map variable: pass the map container id, set the center and the zoom level
let map = L.map('map').setView([ -0.0723876953125,36.056884765625], 12);

// add a tilelayer: provide the url and the attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a marker: provide a center, popup
let marker = L.marker([-0.2345,37.668]).bindPopup('Home').addTo(map);

// Working with geometry: Point, polyline and polygon
let polyline = L.polyline([[-0.2345,37.668],[-0.345,37.668],[-0.45,37.668]]).addTo(map);
let polygon = L.polygon([[-0.5345,37.668],[-0.745,37.68],[-0.45,36.668],[-0.5345,37.668]]).addTo(map);


// Working with geojson layer
let geojson_layer = L.geoJson([nakuru]);

// add the geojson_layer to the map
map.addLayer(geojson_layer);

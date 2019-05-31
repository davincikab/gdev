// Declare a map variable: pass the map container id, set the center and the zoom level
let map = L.map('map').setView([ -0.4223876953125,36.056884765625], 9);

// Add a tilelayer: provide the url and the attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Return a color depending on the area
function getColorByArea(area){
	
  if(area < 440018460.486){
    return '#d7191c';
  }
  else if (area< 739771562.215) {
    return '#fdae61';

  }else if(area < 1039524663.943) {
    return '#ffffbf';

  }else if(area < 1339277765.672) {
    return '#abdda4';
    
  }else {
  	return '#2ca25f';
  }

}


let color = ['#d7191c','#fdae61','#ffffbf','#abdda4','#2b83ba'];

// Style the layer
function style(feature) {
  return{
    color:'#000000',
    fillColor:getColorByArea(feature.properties.st_area_sh),
    fillOpacity:1
  };
}

// Zoom to a feature on click
function zoomTo(e) {
  map.fitBounds(e.layer.getBounds());
}

// Change feature stylinf on mouse over
function changeStyle(e) {
  e.layer.setStyle({
    fillColor:'red',
    color:''
  });
}

// Reset layer style if mouse out of layer
function resetLayerStyle(e){
	data.resetStyle(e.target);
}

// Add event, diif styling on each layer
function dkut(feature,layer) {
  
  // Events: click, mouseover, mouseout
  layer.on('click',function(e){
    zoomTo(e);
   	// layer.bindPopup("Constituency: "+feature.properties.const_nam+ "<br>Area: "+feature.properties.st_area_sh);
  });

  layer.on('mouseover',changeStyle);
  layer.on('mouseout',resetLayerStyle);

}

// Filter geojson data according to a town name Naivasha
function filterByTown(feature){
	 // if (feature.properties.const_nam == 'Naivasha') return true;
	 // return feature.properties.const_nam == 'Naivasha'?true:false;
	 return true;
}

// Added layer styling and event onEachFeature: function used style and dkut 
let data = L.geoJson([nakuru],{style:style,onEachFeature:dkut,filter:filterByTown});
map.addLayer(data);


// A legend showing to guide the user: Additional feature
let legend = L.control({
	position:'bottomright'
});

legend.onAdd = function(map){
	let div =  L.DomUtil.create('div','legend');
	
	let labels  = ['lte 440018460.486','lte 739771562.215','lte 1039524663.943' ,'lte 1339277765.672','lte 1639030867.400'];
	div.innerHTML = '<h4>Areal Legend</h4>';

	for (let i=0; i<labels.length;i++){
		div.innerHTML+='<i style="background:'
				+getColorByArea(labels[i].slice(4))+
		' " width=40px >&nbsp;&nbsp;&nbsp;&nbsp;</i>&nbsp;&nbsp;'+labels[i]+'<br>';
	}
	return div;
}

// Add legend to the map
legend.addTo(map);

map.on('click',function(e){
	console.log(e.latlng);
});
/*
TODO:
	implement a dynamic: 
		1. Symbology(color and classification schemes, opacity).
		2. Filtering(specify a column and a condition)
		3. Identifier: 
		4. Interactivity: Suggest any other
*/
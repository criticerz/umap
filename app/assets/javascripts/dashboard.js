$(document).ready(function() {

  var map = L.map('map').setView([51.505, -0.09], 13);  

  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    id: 'examples.map-i875mjb7'
  }).addTo(map);

  ////////////////////////////////
  var material="Default";
  var markerArray=[];
  var markerLayers = L.layerGroup();
  var coordinateArray=[];
  var materialArray=[];
  var yearBuiltArray=[];
  var numChildrenArray=[];
  var porchArray=[];
  coordinateArray.push([51.5,-.09]);
  materialArray.push("Bricks");
  yearBuiltArray.push("1997")
  numChildrenArray.push("4");
  porchArray.push("No porch");
  coordinateArray.push([51.51,-.1]);
  materialArray.push("Steel");
  yearBuiltArray.push("1997")
  numChildrenArray.push("4");
  porchArray.push("No porch");
  var i=0;
  for(i=0;i<coordinateArray.length;i++){
    var string=("Coordinates: "+ coordinateArray[i] + 
    "<br>Primary Material: " + 
    materialArray[i] + 
    "<br>Year Built: " + yearBuiltArray[i] +
    "<br>Number of Children: " + numChildrenArray[i] +
    "<br>Porch Status: " + porchArray[i] +
    "<br><a href=\"http://www.wikipedia.org/\">Edit information (Leads to Wikipedia for now)</a>");
    markerLayers.addLayer(L.marker(coordinateArray[i]).bindPopup(string));
  }
  markerLayers.addTo(map);
  ////////////////////////////////

  var formString = ("<form id=\"materialInput\" method=\"post\" action=\"\">" + "<textarea name=\"comments\" cols=\"25\" rows=\"1\"> Enter Building Material"
  + "</textarea><br>"
  + "<input id = \"materialSubmit\" type=\"submit\" value=\"Submit\" />"
  + "</form>")

  /////////////////////


  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      //.setContent("You clicked the map at " + e.latlng.toString())
      .setContent(formString)
      .openOn(map);
  }

  map.on('click', onMapClick);

  map.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationerror', onLocationError);


});
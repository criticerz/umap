$(document).ready(function() {

  var $body = $('body');

  if( $body.hasClass('dashboard') ) {

    var map = L.map('map').setView([51.505, -0.09], 13);  
    var markerLayers = L.layerGroup();

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
      maxZoom: 18,
      id: 'examples.map-i875mjb7'
    }).addTo(map);

    L.Icon.Default.imagePath = '/assets';

    $.ajax({
      method: "GET",
      url: "/properties.json"
    }).done(function( properties ) {

      // go through each property
      $.each(properties, function(index, property) {
        
        var popup_html = '<h5>'+property.name+'</h5> <a href="/properties/'+property.id+'/edit">Edit</a>';

        // add property 
        markerLayers.addLayer(L.marker([property.coordinate_lat, property.coordinate_lng]).bindPopup(popup_html));
      })
      
    });

    markerLayers.addTo(map);

    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        //.setContent("You clicked the map at " + e.latlng.toString())
        .setContent('<a href="/properties/new?lat='+e.latlng.lat+'&amp;lng='+e.latlng.lng+'" class="btn btn-success">Add Property</a>')
        .openOn(map);
    }

    map.on('contextmenu', onMapClick);

    map.locate({setView: true, maxZoom: 16});

    // show alert 
    showAlert('Sit tight.. we\'re locating you..');
    

    function onLocationFound(e) {
      
      // show circle
      var radius = e.accuracy / 2;          
      L.circle(e.latlng, radius).addTo(map);

      showTempAlert('We found you! You are within ' + radius + ' meters from this point');
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
      showTempAlert(e.message);
    }

    map.on('locationerror', onLocationError);

    // custom functions
    function showAlert(message) {
      var $jsalert = $('.js-alert');
      $jsalert.find('.js-alert-text').html('<i class="fa fa-spinner fa-spin"></i> '+message);
      $jsalert.show();
    }

    function showTempAlert(message) {
      var $jsalert = $('.js-alert');
      $jsalert.find('.js-alert-text').html(message);
      
      if( $jsalert.is('hidden') ) {
        $jsalert.fadeIn();
      }
      setTimeout(function() {
        $jsalert.fadeOut();
      }, 2000);
    }

    function hideAlert() {
      $('.js-alert').hide();
    }

  }

});
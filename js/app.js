
$(document).ready(function() {
  $('.logo-splash').delay('5000').fadeOut('slow')
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -23.5576413, lng: -46.6623001},
    zoom: 15
  });
}


$(document).ready(function() {
  $('.logo-splash').delay('5000').fadeOut('slow');

  restaurantes.forEach((restaurante, index) => {
  $(".images").append($("<img id='"+ index +"' class='restaurants-img "+ restaurante.type +"' data-toggle='modal' data-target='#food-"+ index +"' src=" + restaurante.image + ">"));
  $('#' + index).click(function () {
    $(".modal").attr('id',"food-"+ $(this).attr('id'));
    $(".modal").attr('aria-labelledby', "food-"+ $(this).attr('id'));
    $(".modal-title").text(restaurante.name);
    $(".modal-type").text(restaurante.type);
    $(".modal-text").text(restaurante.description);
    });
  });

  $("#filter button").each(function() {
    $(this).on("click", function(){
        var filterTag = $(this).attr('id');
        if (filterTag === 'todos' ) {
          $('.restaurants-img').show();
        } else {
        $('.restaurants-img').show();
        $('.restaurants-img:not(.' + filterTag + ')').hide(); }
    });
  });

});

// Google Maps
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -23.5576413, lng: -46.6623001},
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}


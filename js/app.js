
$(document).ready(function() {
  $('.logo-splash').delay('5000').fadeOut('slow');

  restaurantes.forEach(restaurante => {
  $(".images").append($("<img class='restaurants-img "+restaurante.type+"' src=" + restaurante.image + ">"));
  });


  $("#filter button").each(function() {
    $(this).on("click", function(){
        var filtertag = $(this).attr('id');
        $('.restaurants-img').show();
        $('.restaurants-img:not(.' + filtertag + ')').hide();
    });
  });

  // function filterRestaurant(index) {
  //   $('.restaurants-img').each(function () {
  //     if ( index !== $(this).val() ) {
  //       $(this).hide();
  //       // $(this).addClass("not-filter")
  //     }
  //     else {
  //       $(this).show();
  //     }
  //   });
  // };

  // $(".btn").click(function(event) {
  //   filterRestaurant($(this).val())
  // });


  // $('select[name=selector]').change(function() { 
  //   var value = $(this).val()
  //   if (value ==! $('div.body img').id ) {
  //     $('img').addClass("not-filter")
  //   };
  // });



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


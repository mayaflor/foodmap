
$(document).ready(function() {
  $('.logo-splash').delay('5000').fadeOut('slow');


  // MAP1
  var map = L.map('map').setView([-23.5576364, -46.6644888], 16);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-23.5576364, -46.6644888]).addTo(map)
    .bindPopup("Você está aqui!")
    .openPopup();

  restaurantes.forEach((restaurante, index) => {
  $(".images").append($("<img id='"+ index +"' class='restaurants-img "+ restaurante.type +"' data-toggle='modal' data-target='#food-"+ index +"' src=" + restaurante.image + ">"));
  $('#' + index).click(function () {
    $(".modal").attr('id',"food-"+ $(this).attr('id'));
    $(".modal").attr('aria-labelledby', "food-"+ $(this).attr('id'));
    $(".modal-title").text(restaurante.name);
    $(".modal-type").text(restaurante.type);
    $(".modal-text").text(restaurante.description);

    // MAP2
    var latLng = [restaurante.latitude,restaurante.longitude]
    var map2 = L.map('map2').setView(latLng, 18);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

    L.marker(latLng).addTo(map2)
    .bindPopup("O restaurante fica aqui!")
    .openPopup();

    $('.restaurants-img').on('show.bs.modal', function(){
      setTimeout(function() {
        map.invalidateSize();
      }, 10);
    });
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

angular.module('mapApp.map', [])
.controller('mapCtrl', function($scope, $window) {
  var uluru = {lat: 40.748817, lng:  -73.985428};
  $window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  $window.marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

});

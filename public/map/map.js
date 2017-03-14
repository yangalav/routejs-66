angular.module('mapApp.map', [])
.controller('mapCtrl', function($rootScope, $scope, $window) {
  console.log($rootScope.lat, $rootScope.lng)
  var uluru = {lat: $rootScope.lat, lng: $rootScope.lng}
  $window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  $window.marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

});

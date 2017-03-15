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

  // $window.directionsDisplay = new google.maps.DirectionsRenderer();
  // directionsDisplay.setMap($window.map);
  // $window.directionsDisplay.setPanel(document.getElementById('panel'));
  //
  // $window.stepDisplay = new google.maps.InfoWindow;
  //
  // var request = {
  //   origin: 'Chicago',
  //   destination: 'New York',
  //   travelMode: google.maps.DirectionsTravelMode.DRIVING
  // };
  //
  // directionsService.route(request, function(response, status) {
  //   if (status === google.maps.DirectionsStatus.OK) {
  //     directionsDisplay.setDirections(response);
  //   }
  // });
});

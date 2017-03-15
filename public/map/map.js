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

  var directionsService = new google.maps.DirectionsService;
  // var directionsDisplay = new google.maps.DirectionsRenderer();
  // var geocoder = new google.maps.Geocoder();
  //
  // $scope.directions = {
  //   origin: "Collins St, Melbourne, Australia",
  //   destination: "MCG Melbourne, Australia",
  //   showList: false
  // }
  //
  // $scope.getDirections = function () {
  //     var request = {
  //       origin: $scope.directions.origin,
  //       destination: $scope.directions.destination,
  //       travelMode: google.maps.DirectionsTravelMode.DRIVING
  //     };
  //     directionsService.route(request, function (response, status) {
  //       if (status === google.maps.DirectionsStatus.OK) {
  //         directionsDisplay.setDirections(response);
  //         directionsDisplay.setMap($window.map.control.getGMap());
  //         // directionsDisplay.setPanel(document.getElementById('directionsList'));
  //         // $scope.directions.showList = true;
  //       } else {
  //         alert('Google route unsuccesfull!');
  //       }
  //     });
  //   }

  // $window.onChangeHandler = function() {
  //         calculateAndDisplayRoute($window.directionsService, $window.directionsDisplay);
  //       };
  //       document.getElementById('start').addEventListener('change', onChangeHandler);
  //       document.getElementById('end').addEventListener('change', onChangeHandler);
  // }
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

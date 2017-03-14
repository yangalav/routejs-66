angular.module('mapApp.map', [])
.controller('mapCtrl', function($scope, $window) {
  $scope.message = "hi"

// $scope.initMap = function() {
  var uluru = {lat: 40.730610, lng:  -73.935242};
  $window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
});

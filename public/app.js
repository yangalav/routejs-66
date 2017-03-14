angular.module("mapApp", [
  "mapApp.map",
  "mapApp.home",
  "ngRoute"
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "/home/home.html",
    controller: "homeCtrl"
  })
  .when('/map', {
    templateUrl: "/map/map.html",
    controller: "mapCtrl"
  })
})
<<<<<<< HEAD
.controller('homeCtrl', function($scope) {

})
.controller('mapCtrl', function($scope) {
  $scope.message = 'kill me'
})
=======
// .controller('homeCtrl', function($scope) {
//
// })
// .controller('mapCtrl', function($scope) {
//   $scope.message = 'map here'
// })
>>>>>>> 2map

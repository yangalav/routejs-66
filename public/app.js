angular.module("mapApp", [
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
.controller('homeCtrl', function($scope) {

})
.controller('mapCtrl', function($scope) {
  $scope.message = 'kill me'
})

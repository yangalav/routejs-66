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

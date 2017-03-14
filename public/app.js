angular.module("mapApp", [
  "ngRoute"
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "/home/home.html",
    controller: "homeCtrl"
  })
})
.controller('homeCtrl', function($scope) {
  
});

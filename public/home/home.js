angular.module('mapApp.home', [])
.controller('homeCtrl', function($scope, $location) {
  console.log($scope.location)
  $scope.enterAddress = function(){
    $location.path('/map');
  }
});

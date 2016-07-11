angular.module('content')
.controller('ContentCtrl', function($scope, savedPlaces) {
  this.places = savedPlaces;
});
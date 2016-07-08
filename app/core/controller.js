angular.module('savedPlaces')
  .controller('CoreCtrl', ['$scope', 'mainMenu', 'newCategoryInput', 'newPlacePrompt', 'googleMaps',
    function($scope, mainMenu, newCategoryInput, newPlacePrompt, googleMaps) {
      $scope.googleMapsUrl = googleMaps;

      $scope.toggleMenu = function() {
        mainMenu.toggle();
        newCategoryInput.turnOff();
      }

      $scope.newPlacePrompt = newPlacePrompt.bind(null, $scope);
  }]);

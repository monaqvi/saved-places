angular.module('savedPlaces')
  .controller('CoreCtrl', ['$scope', 'mainMenu', 'newCategoryInput', 'newPlacePrompt',
    function($scope, mainMenu, newCategoryInput, newPlacePrompt) {
      $scope.toggleMenu = function() {
        mainMenu.toggle();
        newCategoryInput.turnOff();
      }

      $scope.newPlacePrompt = newPlacePrompt.bind(null, $scope);
  }]);

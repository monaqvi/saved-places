angular.module('savedPlaces')
  .controller('CoreCtrl', ['$scope', '$mdMedia', 'mainMenu', 'newCategoryInput', function($scope, $mdMedia, mainMenu, newCategoryInput) {
    $scope.toggleMenu = function() {
      mainMenu.toggle();
      newCategoryInput.turnOff();
    }
  }]);

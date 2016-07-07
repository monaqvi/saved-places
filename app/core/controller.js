angular.module('savedPlaces')
  .controller('CoreCtrl', ['$scope', '$mdMedia', 'mainMenu', function($scope, $mdMedia, mainMenu) {
    $scope.toggleMenu = function() {
      mainMenu.toggle();
    }
  }]);

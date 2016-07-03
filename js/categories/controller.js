angular.module('categories', ['ngMaterial'])
  .controller('CategoriesCtrl', function($scope, $mdSidenav) {
    $scope.categories = [
      {
        label: 'Restaurants'
      },
      {
        label: 'Bars'
      },
      {
        label: 'Coffee shops'
      },
    ];

    $scope.toggleMenu = function() {
      console.log($mdSidenav('left'));
      $mdSidenav('left').toggle();
    }
  });
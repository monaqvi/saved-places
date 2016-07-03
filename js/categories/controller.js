angular.module('categories', ['ngMaterial'])
  .controller('CategoriesCtrl', function($scope, $mdSidenav, $mdMedia) {
    $scope.menuOpen = $mdMedia('gt-md');
    $scope.addingNewCategory = false;
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
      $scope.menuOpen = !$scope.menuOpen;
    }

    $scope.addNewCategory = function() {
      $scope.addingNewCategory = !$scope.addingNewCategory;
    }
  });
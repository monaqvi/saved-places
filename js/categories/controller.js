angular.module('categories', ['ngMaterial', 'ngMessages'])
  .controller('CategoriesCtrl', function($scope, $mdSidenav, $mdMedia) {
    $scope.menuOpen = $mdMedia('gt-md');
    $scope.addingNewCategory = false;
    $scope.categories = [
      {
        label: 'Restaurants',
        wanted: false,
      },
      {
        label: 'Bars',
        wanted: false,
      },
      {
        label: 'Coffee shops',
        wanted: false,
      },
    ];

    $scope.toggleMenu = function() {
      $scope.menuOpen = !$scope.menuOpen;
    }

    $scope.addNewCategory = function() {
      $scope.addingNewCategory = !$scope.addingNewCategory;
    }

    $scope.createNewCategory = function() {
      $scope.categories.push({
        label: $scope.categoryName,
        wanted: false,
      });
      $scope.categoryName = '';
    }
  });

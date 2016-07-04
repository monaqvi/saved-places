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

    $scope.toggleNewCategoryInput = function() {
      $scope.addingNewCategory = !$scope.addingNewCategory;
      if ($scope.addingNewCategory) {
        console.log($scope.categoryForm);
      }
    }

    $scope.createNewCategory = function() {
      $scope.toggleNewCategoryInput();
      $scope.categories.push({
        label: $scope.categoryName,
        wanted: false,
      });
      $scope.categoryName = '';
      $scope.categoryForm.$setPristine();
      $scope.categoryForm.$setUntouched();
    }
  });

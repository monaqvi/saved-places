angular.module('savedPlaces')
  .controller('CoreCtrl', ['$scope', '$mdMedia', function($scope, $mdMedia) {
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
      if ($scope.menuOpen) $scope.resetNewCategory();
    }

    $scope.toggleNewCategoryInput = function() {
      $scope.addingNewCategory = !$scope.addingNewCategory;
    }

    $scope.createNewCategory = function() {
      $scope.categories.push({
        label: $scope.categoryName,
        wanted: false,
      });
      $scope.resetNewCategory();
    }

    $scope.resetNewCategory = function() {
      $scope.addingNewCategory = false;
      $scope.categoryName = '';
    }
  }]);

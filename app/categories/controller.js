angular.module('categories')
  .controller('CategoriesCtrl', function($scope, $mdMedia, mainMenu) {
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

    $scope.mainMenu = mainMenu;
    
    $scope.toggleMenu = function() {
      mainMenu.toggle();
      if ($mainMenu.isOpen) $scope.resetNewCategory();
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
  });

angular.module('categories')
  .controller('CategoriesCtrl', ['$scope', '$location', '$mdMedia', 'mainMenu', 'newCategoryInput', 'activeCategories',
    function($scope, $location, $mdMedia, mainMenu, newCategoryInput, activeCategories) {
      $scope.categories = [
        'All',
        'Bars',
        'Coffee Shops',
        'Restaurants',
      ]

      $scope.active = activeCategories;

      $scope.mainMenu = mainMenu;
      $scope.newCategoryInput = newCategoryInput;
      
      $scope.toggleMenu = function() {
        mainMenu.toggle();
      }
      
      $scope.createNewCategory = function() {
        $scope.categories.push($scope.categoryName);
        $scope.resetNewCategory();
      }

      $scope.resetNewCategory = function() {
        newCategoryInput.turnOff();
        $scope.categoryName = '';
      }

      $scope.getFirstButtonLabel = function() {
        return ($location.$$path === '/explore') ? 'My Places' : 'Explore';
      };

      $scope.getActiveView = function() {
        return ($location.$$path === '/explore') ? 'places' : 'explore';
      };
  }]);

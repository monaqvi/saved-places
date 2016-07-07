angular.module('categories')
  .controller('CategoriesCtrl', ['$scope', '$location', '$mdMedia', 'mainMenu', 'newCategoryInput',
    function($scope, $location, $mdMedia, mainMenu, newCategoryInput) {
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
      $scope.newCategoryInput = newCategoryInput;
      
      $scope.toggleMenu = function() {
        mainMenu.toggle();
      }
      
      $scope.createNewCategory = function() {
        $scope.categories.push({
          label: $scope.categoryName,
          wanted: false,
        });
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

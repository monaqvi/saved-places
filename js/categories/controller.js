angular.module('categories', ['ngMaterial'])
  .controller('CategoriesCtrl', function($scope) {
    $scope.categories = [
      {
        label: 'All'
      },
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
  });
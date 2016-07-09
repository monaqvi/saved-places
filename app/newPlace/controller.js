angular.module('newPlace')
  .controller('NewPlaceCtrl', ['$scope', 'categoryList',
    function ($scope, categoryList) {
      // Take out 'All' (first item) as a valid option
      $scope.categories = categoryList.slice(1);

      $scope.address = '';
      $scope.details = '';
      $scope.options = {
        country: 'us',
        // bounds: ''
      };

      $scope.placeName = '';
      $scope.placeNote = '';
      $scope.placePhoto = '';
      $scope.placeReference = '';
      $scope.placeCategory = '';
    }
  ]);
  
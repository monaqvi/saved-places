angular.module('newPlace')
  .controller('NewPlaceCtrl', ['$scope', '$mdDialog', 'categoryList',
    function ($scope, $mdDialog, categoryList) {
      // Take out 'All' (first item) as a valid option
      $scope.categories = categoryList.slice(1);
      $scope.center = '41.850033,-87.6500523';

      $scope.hide = function() {
        $mdDialog.hide();
      };
      
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };

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
  
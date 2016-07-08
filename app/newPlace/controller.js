angular.module('newPlace')
  .controller('NewPlaceCtrl', ['$scope',
    function ($scope) {
      $scope.address = '';
      $scope.details = '';
      $scope.options = {
        country: 'us',
        // bounds: ''
      };
    }
  ]);


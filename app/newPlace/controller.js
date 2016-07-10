angular.module('newPlace')
  .controller('NewPlaceCtrl', ['$scope', '$mdDialog', '$timeout', 'categoryList', 'NgMap',
    function ($scope, $mdDialog, $timeout, categoryList, NgMap) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };

      // Take out 'All' (first item) as a valid option
      $scope.categories = categoryList.slice(1);
      $scope.center = '41.850033,-87.6500523';

      $scope.map = {};
      $scope.fixSize = function() { google.maps.event.trigger($scope.map, 'resize'); };

      // NgMap.getMap({id: 'mymap'})
      //      .then(function(map) {
      //         $timeout(function() {
      //           console.log('done');
      //           google.maps.event.trigger(map, 'resize')
      //         },
      //       1000)
      //      });

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
  
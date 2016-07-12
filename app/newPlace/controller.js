angular.module('newPlace')
  .controller('NewPlaceCtrl', ['$scope', '$mdDialog', '$timeout', 'categoryList', 'NgMap', 'savedPlaces', 'place',
    function ($scope, $mdDialog, $timeout, categoryList, NgMap, savedPlaces, place) {
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

      $scope.address = place ? place.address : '';
      $scope.placeName = place ? place.name : '';
      $scope.placeNote = (place && place.reviews) ? place.reviews.map(function(review) { return review.text; }).join('\n') : '';
      $scope.options = {
        country: 'us',
        // bounds: ''
      };

      // Pass detailed data so it can be used here
      $scope.details = place || {};      

      // Add data to new place so it can be saved
      $scope.addPlace = function() {
        if (!$scope.placeName) return;
        if (!$scope.placeCategory) return;
        if (!$scope.address) return;
        
        var newPlaceOpts = {
          name: $scope.placeName,
          note: $scope.placeNote,
          category: $scope.placeCategory,
          photo: ($scope.details.photos && $scope.details.photos.length !== 0) ? $scope.details.photos[0].getUrl({maxWidth: 640}) : '',
          id: $scope.details.reference,
        };
        savedPlaces.addPlace(newPlaceOpts);
        $scope.cancel();
      };
    }
  ]);
  
angular.module('edit')
  .controller('EditPlaceCtrl', ['$scope', '$routeParams', '$location', '$mdDialog', 'categoryList', 'savedPlaces',
    function ($scope, $routeParams, $location, $mdDialog, categoryList, savedPlaces) {
      var placeIndex = $routeParams.placeId;
      var activePlace = savedPlaces[placeIndex] || $location.path('/#/places');

      $scope.categories = categoryList.slice(1);
      $scope.address = activePlace.address;
      $scope.placeName = activePlace.name;
      $scope.placeCategory = activePlace.category;
      $scope.placeNote = activePlace.note;

      $scope.savePlace = function() {
        var newInfo = {
          name: $scope.placeName,
          address: $scope.address,
          category: $scope.placeCategory,
          note: $scope.placeNote,
        };

        savedPlaces[placeIndex] = Object.assign(activePlace, newInfo);
      }
    }
  ]);
  
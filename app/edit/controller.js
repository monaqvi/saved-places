angular.module('edit')
  .controller('EditPlaceCtrl', ['$scope', '$routeParams', '$mdDialog', 'categoryList', 'savedPlaces',
    function ($scope, $routeParams, $mdDialog, categoryList, savedPlaces) {
      var placeIndex = $routeParams.placeId;
      var activePlace = savedPlaces[placeIndex];


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
  
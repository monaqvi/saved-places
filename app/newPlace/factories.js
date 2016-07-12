angular.module('newPlace')
  .factory('newPlacePrompt', ['$mdDialog', '$mdMedia', function($mdDialog, $mdMedia) {
    return function($scope, place) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

      $mdDialog.show({
        controller: 'NewPlaceCtrl',
        templateUrl: './app/newPlace/newPlacePrompt.html',
        parent: angular.element(document.body),
        // targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        locals : {
          place : place,
        },
      })
      .then(
        function(answer) {
          // On answer
        }, 
        function() {
          // On cancel
        }
      );
    }
  }])
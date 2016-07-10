angular.module('newPlace')
  .factory('newPlacePrompt', ['$mdDialog', '$mdMedia', function($mdDialog, $mdMedia) {
    return function($scope, ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'NewPlaceCtrl',
        templateUrl: './app/newPlace/newPlacePrompt.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      })
      .then(
        function(answer) {
          // On answer
        }, 
        function() {
          // On cancel
        }
      );

      $scope.$watch(
        function() {
          return $mdMedia('xs') || $mdMedia('sm');
        }, 
        function(wantsFullScreen) {
          $scope.customFullscreen = (wantsFullScreen === true);
        });
    }
  }])
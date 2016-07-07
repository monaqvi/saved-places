angular.module('newPlace')
  .factory('newPlacePrompt', ['$mdDialog', function($mdDialog) {
    return function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      })
      .then(
        function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, 
        function() {
          $scope.status = 'You cancelled the dialog.';
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
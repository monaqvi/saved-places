angular.module('savedPlaces')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
      when('/places', {
        templateUrl: './app/content/template.html',
        controller: 'ContentCtrl',
        controllerAs: 'content'
      }).
      // when('/places/:placeId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PlaceDetailCtrl'
      // }).
      when('/explore', {
        template: '<nearby-places></nearby-places>',
      }).
      otherwise({
        redirectTo: '/places'
      });
  }]);
angular
  .module('savedPlaces', ['ngMaterial', 'ngRoute', 'categories', 'content'])
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
      // when('/explore', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'ExploreCtrl'
      // }).
      otherwise({
        redirectTo: '/places'
      });
  }])
  .run(function($log){
    $log.debug("running");
  });
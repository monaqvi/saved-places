// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$routeParams', 'geoLocator', 'googlePlaces', function ExploreCtrl($routeParams, geoLocator, googlePlaces) {
      function captureUserLocation() {
          geoLocator.getCurrentPosition();
      };

      this.googleMapsUrl = googlePlaces;

      this.places = [
        {
          title: 'Title 1',
          description: 'Description here...',
          imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
        },
        {
          title: 'Title 2',
          description: 'Description here...',
          imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
        },
      ];
    }],
  });

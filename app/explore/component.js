// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$routeParams', 'geoLocator', 'googleMaps', 'googlePlaces',
    function ExploreCtrl($routeParams, geoLocator, googleMaps, googlePlaces) {
      var self = this;
      var center = '41.850033,-87.6500523';

      self.googleMapsUrl = googleMaps;
      self.center = center;
      geoLocator.getCurrentPosition()
                .then(function(geo) {
                  if (geo.coords) return self.center = geo.coords.latitude + ',' + geo.coords.longitude; 
                });

      // Use closures to avoid repetitive access to len property
      var choices = ['sm', 'md', 'lg'];
      var numChoices = choices.length;
      var randomSizer = function() {
        return choices[Math.floor(Math.random() * numChoices)];
      };

      googlePlaces.query()
                  .then(function(places) {
                    places = [
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
                      {
                        title: 'Title 2',
                        description: 'Description here...',
                        imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
                      },
                      {
                        title: 'Title 2',
                        description: 'Description here...',
                        imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
                      },
                      {
                        title: 'Title 2',
                        description: 'Description here...',
                        imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
                      },
                      {
                        title: 'Title 2',
                        description: 'Description here...',
                        imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
                      },
                      {
                        title: 'Title 2',
                        description: 'Description here...',
                        imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
                      },
                    ]

                    // Alternate properly based on 2-panel view -- doing it here is faster than using ng-if within ng-repeat
                      // Bitwise check for odd #s is faster than modulo
                    places.forEach(function(element) { element.size = randomSizer(); });
                    self.oddPlaces = places.filter(function(element, i) { return (i & 1); });
                    self.evenPlaces = places.filter(function(element, i) { return !(i & 1); });
                  });

    }],
  });

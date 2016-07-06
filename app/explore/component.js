// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$routeParams', '$timeout', 'geoLocator', 'googleMaps', 'googlePlaces',
    function ExploreCtrl($routeParams, $timeout, geoLocator, googleMaps, googlePlaces) {
      var self = this;

      self.googleMapsUrl = googleMaps;
      self.keywords = '';
      self.center = '41.850033,-87.6500523';
      geoLocator.getCurrentPosition()
                .then(function(geo) {
                  if (geo.coords) return self.center = geo.coords.latitude + ',' + geo.coords.longitude; 
                });

      self.debouncedQueryGooglePlaces = debounce(queryGooglePlaces, 500);

      function debounce(func, wait, immediate, begAndEnd) {
        var timeout;
        // Return function that has access to timeout closure variable
        return function() {
          // Keep track of these so can be used within setTimeout
          var self = this, args = arguments;

          var callNow = immediate && !timeout;
          // Clear the previous timeout
          clearTimeout(timeout);
          // Set the new timeout
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(self, args);

          function later() {
            // Reset timeout
            timeout = null;
            // If hasn't already been called immediately, call the function now
            // If has been called immediately, but begAndEnd flag is on, call again anyway so the end query is captured
            if ((immediate && begAndEnd) || !immediate) func.apply(self, args);
          }
        };
      }

      function queryGooglePlaces(keywords) {
        googlePlaces.query(keywords)
                    .then(function(places) {
                      // Alternate properly based on 2-panel view -- doing it here is faster than using ng-if within ng-repeat
                        // Bitwise check for odd #s is faster than modulo
                      console.log(places.length, 'places found!');
                      places.forEach(function(element, index) { element.size = randomSizer(index); });
                      self.oddPlaces = places.filter(function(element, i) { return !!(i & 1); });
                      self.evenPlaces = places.filter(function(element, i) { return !(i & 1); });
                    });
      }

      var choices = ['md', 'sm', 'lg'];
      var numChoices = choices.length;
      var randomSizer = function(i) {
        return choices[i % numChoices];
      };

    }],
  });

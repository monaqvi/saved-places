// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$routeParams', '$timeout', '$mdDialog', 'geoLocator', 'googleMaps', 'googlePlaces', 'debounce',
    function ExploreCtrl($routeParams, $timeout, $mdDialog, geoLocator, googleMaps, googlePlaces, debounce) {
      var self = this;

      self.googleMapsUrl = googleMaps;
      self.keywords = '';
      self.center = '41.850033,-87.6500523';
      geoLocator.getCurrentPosition()
                .then(function(geo) {
                  if (geo.coords) return self.center = geo.coords.latitude + ',' + geo.coords.longitude; 
                });

      self.debouncedQueryGooglePlaces = debounce(queryGooglePlaces, 500);

      function queryGooglePlaces(keywords) {
        googlePlaces.query(keywords)
                    .then(function(places) {
                      // Alternate properly based on 2-panel view -- doing it here is faster than using ng-if within ng-repeat
                        // Bitwise check for odd #s is faster than modulo
                      console.log(places.length + ' places found!');
                      places.forEach(function(element, index) { element.size = randomSizer(index); });
                      self.oddPlaces = places.filter(function(element, i) { return !!(i & 1); });
                      self.evenPlaces = places.filter(function(element, i) { return !(i & 1); });
                    })
                    .catch(alertNoneFound);
      }

      function alertNoneFound() {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('No results found!')
            .textContent('Please try a different keyword or change the map location / zoom')
            .ariaLabel('No results')
            .ok('Got it!')
            // Can specify either sting with query selector
            .openFrom('#alertFrom')
            // or an element
            .closeTo(angular.element(document.querySelector('#alertFrom')))
        );
      }

      var choices = ['md', 'sm', 'lg'];
      var numChoices = choices.length;
      function randomSizer(i) {
        return choices[i % numChoices];
      }
    }],
  });

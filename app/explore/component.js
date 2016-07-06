// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$routeParams', '$timeout', 'geoLocator', 'googleMaps', 'googlePlaces', 'debounce', 'alertNoneFound', 'randomSizer',
    function ExploreCtrl($routeParams, $timeout, geoLocator, googleMaps, googlePlaces, debounce, alertNoneFound, randomSizer) {
      var self = this;

      self.googleMapsUrl = googleMaps;
      self.keywords = '';
      self.center = '41.850033,-87.6500523';
      self.oddPlaces = [], self.evenPlaces = [];
      geoLocator.getCurrentPosition()
                .then(function(geo) {
                  if (geo.coords) self.center = geo.coords.latitude + ',' + geo.coords.longitude; 
                  return;
                })
                 // Load once at start with no keywords
                .then(queryGooglePlaces);

      self.debouncedQueryGooglePlaces = debounce(queryGooglePlaces, 500);

      function queryGooglePlaces(keywords) {
        var q = googlePlaces.query(keywords, updatePlaceCards);
        
        function updatePlaceCards(err, data) {
          if (err) return alertNoneFound(data);
          var places = data;
          console.log(places.length + ' places found!');
          console.log(places);
          // Alternate properly based on 2-panel view -- doing it here is faster than using ng-if within ng-repeat
            // Bitwise check for odd #s is faster than modulo
            // Retain old data, push to bottom
          places.forEach(function(element, index) { element.size = randomSizer(index); });
          self.oddPlaces = places.filter(function(element, i) { return !!(i & 1); }).concat(self.oddPlaces);
          self.evenPlaces = places.filter(function(element, i) { return !(i & 1); }).concat(self.evenPlaces);
        }
      }
    }],
  });

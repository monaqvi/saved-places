// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$scope', '$routeParams', '$timeout', 'geoLocator', 'googlePlaces', 'debounce', 'alertNoneFound', 'resultsRefiner',
    function ExploreCtrl($scope, $routeParams, $timeout, geoLocator, googlePlaces, debounce, alertNoneFound, resultsRefiner) {
      var self = this;

      self.keywords = '';
      self.center = '41.850033,-87.6500523';
      self.oddPlaces = [], self.evenPlaces = [];
      self.debouncedQueryGooglePlaces = debounce(queryGooglePlaces, 500);
      geoLocator.getCurrentPosition()
                .then(function(geo) {
                  if (geo.coords) self.center = geo.coords.latitude + ',' + geo.coords.longitude; 
                  return;
                })
                 // Load once at start with no keywords
                .then(self.debouncedQueryGooglePlaces);

      function queryGooglePlaces(keywords) {
        var q = googlePlaces.query(keywords, updatePlaceCards);
        
        function updatePlaceCards(err, data) {
          if (err) return alertNoneFound(data);
          window.places = data;
          console.log(data.length + ' places found!');
          console.log(data);

          var places = resultsRefiner(data);
          // Alternate properly based on 2-panel view -- doing it here is faster than using ng-if within ng-repeat
          // Retain old data, push to bottom
          self.oddPlaces = places.odd.concat(self.oddPlaces);
          self.evenPlaces = places.even.concat(self.evenPlaces);

          // Manually refresh views because $timeout from debounce will cause delay
          $scope.$apply();
        }
      }
    }],
  });

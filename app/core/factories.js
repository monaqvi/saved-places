angular.module('savedPlaces')
  .factory('geoLocator', ['$q', '$window', function ($q, $window) {
    return {
      getCurrentPosition: function () {
        var deferred = $q.defer();

        if (!$window.navigator.geolocation) {
          deferred.reject('Geolocation not supported.');
        } else {
          $window.navigator.geolocation.getCurrentPosition(
            function (position) {
              // console.log(position);
              deferred.resolve(position);
            },
            function (err) {
              deferred.reject(err);
            }
          );
        }
        
        return deferred.promise;
      }
    }
  }])
  .factory('googleMaps', ['$window', 'apiKeys', 'NgMap', function ($window, apiKeys, NgMap) {
    // API key as closure variable so asks only once
    // Keys in seperate factory to avoid publishing to Github, still visible in Source code -- can use server-side codes to avoid this
    // Prompt to enter API key if user has forgotten to create new app/api/keys.js file
      // Keep asking if not provided
    var apiKey = (apiKeys.googlePlaces === 'API KEY HERE') ?
        askForAPIKey($window) :
        apiKeys.googlePlaces;

    var params = {
      key: apiKey,
      libraries: 'places',
    };

    return 'https://maps.google.com/maps/api/js?' + Object.keys(params)
                                                          .map(function(key) { return key + '=' + params[key]; })
                                                          .join('&');

    function askForAPIKey($window) {
      var ans = $window.prompt('Input your Google API key');
      return ans ? ans : askForAPIKey($window);
    }
  }])
  .factory('googlePlaces', ['$window', 'NgMap', '$q', 'debounce', function ($window, NgMap, $q, debounce) {
    return {
      query: query,
    }

    function query(keywords) {
      if (!keywords) {
        console.error('Keywords cannot be blank');
        return;
      }
      console.log('Searching for places nearby with keywords:', keywords);
      return NgMap
        .getMap()
        .then(function(map) {
          console.log('Grabbed map:', map);
          var deferred = $q.defer();
          var infoWindow = new google.maps.InfoWindow(),
              service = new google.maps.places.PlacesService(map);

          var eagerDebounceSearch = debounce(performSearch, 5000);
          var lazyDebounceSearch = debounce(performSearch, 5000);
          eagerDebounceSearch();

          // map.addListener('bounds_changed', lazyDebounceSearch);

          function performSearch() {
            var request = {
              bounds: map.getBounds(),
              keyword: keywords,
            };
            console.log('searching...');
            service.radarSearch(request, callback);
          }

          function callback(results, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.error(status);
              deferred.reject(status);
              return;
            }

            console.log('finished searching');
            results.forEach(function(result) {
              addMarker(result);
            });

            deferred.resolve(results);
          }

          function addMarker(place) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              icon: {
                url: 'http://maps.gstatic.com/mapfiles/circle.png',
                anchor: new google.maps.Point(10, 10),
                scaledSize: new google.maps.Size(10, 17)
              }
            });
            
            google.maps.event.addListener(marker, 'click', function() {
              service.getDetails(place, function(result, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                  console.error(status);
                  return;
                }
                infoWindow.setContent(result.name);
                infoWindow.open(map, marker);
              });
            });
          }

          // Return asynchronously
          return deferred.promise;

        });
      }
  }])
  .factory('debounce', [function() {
    return function debounce(func, wait, immediate, begAndEnd) {
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
  }]);

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
  .factory('googlePlaces', ['$window', 'NgMap', '$q', function ($window, NgMap, $q) {
    return {
      query: query,
    }

    function query(keywords) {
      console.log('Searching for places nearby with keywords:', keywords);
      return NgMap
        .getMap()
        .then(function(map) {
          console.log('Grabbed map:', map);
          var deferred = $q.defer();
          var infoWindow = new google.maps.InfoWindow(),
              service = new google.maps.places.PlacesService(map),
              places = [];

          // map.addListener('idle', performSearch);
          performSearch();

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

            console.log('got results');
            results.forEach(function(result) {
              addMarker(result);
            });

            deferred.resolve(places.concat(results));
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
  }]);

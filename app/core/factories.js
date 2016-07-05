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
  }]);

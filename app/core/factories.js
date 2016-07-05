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
  .factory('googlePlaces', ['$window', '$resource', 'apiKeys', function ($window, $resource, apiKeys) {
    // API key as closure variable so asks only once
    // Prompt to enter API key if user has forgotten to create new app/api/keys.js file
    var apiKey = (apiKeys.googlePlaces === 'API KEY HERE') ?
        $window.prompt('Input your Google API key') :
        apiKeys.googlePlaces;

    return {
      getNearbyPlaces: getNearbyPlaces,
    }

    function getNearbyPlaces($resource) {
    }
  }]);

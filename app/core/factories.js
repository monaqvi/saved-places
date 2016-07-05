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
  .factory('googlePlaces', ['$window', function ($window) {
    // API key as closure variable so asks only once
    var apiKey = $window.prompt('Input your Google API key');

    return {
      getNearbyPlaces: getNearbyPlaces,
    }

    function getNearbyPlaces() {
      
    }

  }]);

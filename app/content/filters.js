angular.module('content')
  .filter('active', function(activeCategories) {
    return function(places) {
      if (activeCategories.All) return places;
      return places.filter(function(place) {
        return activeCategories[place.category];
      })
    };
  });
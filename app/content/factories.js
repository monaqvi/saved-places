angular.module('content')
  .factory('savedPlaces', [function() {
    var savedPlaces = {};

    savedPlaces.even = [];
    savedPlaces.odd = [];

    savedPlaces.addPlace = function(opts) {
      if (!opts) return;
      
      newPlace = {
        name: opts.name,
        note: opts.note,
        photo: opts.photo,
        category: opts.category,
        id: opts.id,
      };

      var addTo = this.even.length > this.odd.length ? this.odd : this.even;

      addTo.push(newPlace);

    };

    return savedPlaces;

  }]);

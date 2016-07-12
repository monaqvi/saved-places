angular.module('content')
  .factory('savedPlaces', [function() {
    var savedPlaces = [];

    savedPlaces.addPlace = function(opts) {
      if (!opts) return;
      
      newPlace = {
        name: opts.name,
        address: opts.address,
        note: opts.note,
        photo: opts.photo,
        category: opts.category,
        id: opts.id,
      };
      
      this.push(newPlace);

    };

    return savedPlaces;

  }]);

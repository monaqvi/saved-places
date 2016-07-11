angular.module('content')
  .factory('savedPlaces', [function() {
    var savedPlaces = [
      {
        name: 'Title 1',
        note: 'Description here...',
        photo: 'https://material.angularjs.org/latest/img/washedout.png',
        category: 'Bars',
        id: '1111',
      },
      {
        name: 'Title 2',
        note: 'Description here...',
        photo: 'https://material.angularjs.org/latest/img/washedout.png',
        category: 'Restaurants',
        id: '2222',
      },
    ];

    savedPlaces.addPlace = function(opts) {
      if (!opts) return;
      
      newPlace = {
        name: opts.name,
        note: opts.note,
        photo: opts.photo,
        category: opts.category,
        id: opts.id,
      };

      this.push(newPlace);

    };

    return savedPlaces;

  }]);

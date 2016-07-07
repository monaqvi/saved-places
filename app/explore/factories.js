angular.module('explore')
  .factory('alertNoneFound', ['$mdDialog', function($mdDialog) {
    return function alertNoneFound(keywords) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('No results found!')
          .textContent('Nothing found using: \'' + keywords + '\'. Please try a different keyword or change the map location / zoom.')
          .ariaLabel('No results')
          .ok('Got it!')
          // Can specify either sting with query selector
          .openFrom('#alertFrom')
          // or an element
          .closeTo(angular.element(document.querySelector('#alertFrom')))
      );
    }
  }])
  .factory('randomSizer', function() {
    var choices = ['md', 'sm', 'lg'];
    var numChoices = choices.length;
    return function randomSizer(i) {
      return choices[i % numChoices];
    }
  })
  .factory('resultsRefiner', ['randomSizer', function(randomSizer) {
    return function (array) {
      var even = [], 
          odd = [];

      array.forEach(function(e, i) {
        // Map properties
        e.name = e.name;
        e.categories = e.types || [];
        e.address = e.vicinity || '';
        e.photo = e.photos[0].getUrl({maxWidth: 640});
        e.size = randomSizer(i); 

        // Assign to even or odd accordingly
        // Bitwise check for odd #s is faster than modulo
        (i & 1) ? odd.push(e) : even.push(e);
      });

      return { even: even, odd: odd };
    }
  }]);
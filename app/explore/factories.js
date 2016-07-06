angular.module('explore')
  .factory('alertNoneFound', ['$mdDialog', function($mdDialog) {
    return function alertNoneFound() {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('No results found!')
          .textContent('Please try a different keyword or change the map location / zoom')
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
  });

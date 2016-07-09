angular.module('content')
.controller('ContentCtrl', function($scope) {
  this.places = [
    {
      title: 'Title 1',
      description: 'Description here...',
      imagePath: 'https://material.angularjs.org/latest/img/washedout.png',
      category: 'Bars',
    },
    {
      title: 'Title 2',
      description: 'Description here...',
      imagePath: 'https://material.angularjs.org/latest/img/washedout.png',
      category: 'Restaurants',
    },
  ]
});
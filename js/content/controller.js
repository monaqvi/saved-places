angular.module('content', ['ngMaterial'])
.controller('ContentCtrl', function($scope) {
  this.places = [
    {
      title: 'Title 1',
      description: 'Description here...',
      imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
    },
    {
      title: 'Title 2',
      description: 'Description here...',
      imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
    },
  ]
});
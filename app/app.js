angular
  .module('savedPlaces', [
    'ngMaterial',
    'ngRoute',
    'ngAnimate',
    'ngMap',
    'categories',
    'content',
    'explore',
    'newPlace',
  ])
  .run(function($log){
    $log.debug("running");
  });
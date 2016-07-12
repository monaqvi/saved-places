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
    'edit',
  ])
  .run(function($log){
    $log.debug("running");
  });
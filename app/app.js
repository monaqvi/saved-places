angular
  .module('savedPlaces', [
    'ngMaterial',
    'ngRoute',
    'ngAnimate',
    'ngMap',
    'categories',
    'content',
    'explore',
  ])
  .run(function($log){
    $log.debug("running");
  });
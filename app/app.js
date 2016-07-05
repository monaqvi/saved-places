angular
  .module('savedPlaces', [
    'ngMaterial',
    'ngRoute',
    'ngResource',
    'ngMap',
    'categories',
    'content',
    'explore',
  ])
  .run(function($log){
    $log.debug("running");
  });
angular
  .module('savedPlaces', ['ngMaterial', 'ngRoute', 'ngResource', 'categories', 'content', 'explore'])
  .run(function($log){
    $log.debug("running");
  });
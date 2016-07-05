angular
  .module('savedPlaces', ['ngMaterial', 'ngRoute', 'categories', 'content', 'explore'])
  .run(function($log){
    $log.debug("running");
  });
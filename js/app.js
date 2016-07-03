angular
  .module('savedPlaces', ['ngMaterial', 'ngRoute', 'categories', 'content'])
  .run(function($log){
    $log.debug("running");
  });
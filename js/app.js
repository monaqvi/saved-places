angular
  .module('savedPlaces', ['ngMaterial', 'ngRoute', 'categories'])
  .run(function($log){
    $log.debug("running");
  });
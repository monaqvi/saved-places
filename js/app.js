angular
  .module('savedPlaces', ['ngMaterial', 'ngRoute'])
  .run(function($log){
    $log.debug("running");
  });
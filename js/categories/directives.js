angular.module('categories')
  .directive("categoryValidater", function(){
            // requires an isloated model
            return {
             // restrict to an attribute type.
             restrict: 'A',
            // element must have ng-model attribute.
             require: 'ngModel',
             link: function(scope, ele, attrs, ctrl){

                // add a parser that will process each time the value is
                // parsed into the model when the user updates it.
                ctrl.$parsers.unshift(function(value) {
                  if(value){
                    // test and set the validity after update.
                    var valid = scope.categoriesLabels.indexOf(value) === -1;
                    ctrl.$setValidity('duplicateLabel', valid);
                  }

                  // if it's valid, return the value to the model,
                  // otherwise return undefined.
                  return valid ? value : undefined;
                });

             }
            }
          });
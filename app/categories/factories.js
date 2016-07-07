angular.module('categories')
  .factory('newCategoryInput', [function() {
    var newCategoryInput = {
      isActive: false,

      toggle: function() {
        this.isActive = !this.isActive;
      },

      turnOff: function() {
        this.isActive = false;
      },

    };

    return newCategoryInput;
  }]);
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
  }])
  .factory('activeCategories', [function() {
    var activeCategories = {
      All:true,

      __add: function(category) {
        this[category] = true;
      },

      __remove: function(category) {
        this[category] = false;
      },

      __toggle: function(category) {
        this[category] = !this[category];
      },

    };

    return activeCategories;
  }])
  .factory('categoryList', [function() {
    var categoryList = [
      'All',
    ];

    categoryList.add = function(category) {
      this.push(category);
    };

    categoryList.remove = function(category) {
      this.forEach(function(e, i) {
        if (e === category) this.splice(i, 1)
      });
    };

    return categoryList;
  }])


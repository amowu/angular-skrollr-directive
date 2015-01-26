'use strict';

angular.module('directives.skrollr', [])
  .directive('skrollr', function() {
    var directiveDefinitionObject = {
      link: function() {
        skrollr.init().refresh();
      }
    };

    return directiveDefinitionObject;
  });

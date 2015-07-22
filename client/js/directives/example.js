'use strict';

let angular = require('angular');

/**
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    }
  };

}

angular.module('app.directives').directive('exampleDirective', exampleDirective);
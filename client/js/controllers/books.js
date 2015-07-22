'use strict';

let angular = require('angular');
let _ = require('lodash');
//let _2 = require('underscore');

/**
 * @ngInject
 */
function BooksCtrl($timeout, $http) {

  // ViewModel
  var vm = this;

  vm.title = 'Books';



}
angular.module('app.controllers').controller('BooksCtrl', BooksCtrl);

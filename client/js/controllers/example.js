'use strict';

let angular = require('angular');
let _ = require('lodash');
//let _2 = require('underscore');

/**
 * @ngInject
 */
function ExampleCtrl($timeout, $http) {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, Babel and Rails!';
  vm.number = 111;

  vm.getRemoteNumber = function(){
    $timeout(function(){
      $http.get('/home/numbers.json').success(function(data){
        //vm.number = _.first(data);
        vm.number = data[0];
      });
    },1000);
  };

  vm.getRemoteNumber();



}
angular.module('app.controllers').controller('ExampleCtrl', ExampleCtrl);

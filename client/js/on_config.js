'use strict';

/**
 * @ngInject
 */
export default function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
      .state('Home', {
        url: '/',
        controller: 'ExampleCtrl as home',
        templateUrl: 'home.html',
        title: 'Home'
      }).state('Books', {
        url: '/books',
        controller: 'BooksCtrl as books',
        templateUrl: 'books.html',
        title: 'Books'
      });

  $urlRouterProvider.otherwise('/');

}

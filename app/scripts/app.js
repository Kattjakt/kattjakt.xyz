'use strict';

angular.module('kattjakt', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    console.log('hello from app.js');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

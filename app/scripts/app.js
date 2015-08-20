'use strict';

angular
  .module('hemaApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
      });
  });

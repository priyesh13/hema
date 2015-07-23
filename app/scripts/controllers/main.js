'use strict';

/**
 * @ngdoc function
 * @name hemaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hemaApp
 */
angular.module('hemaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

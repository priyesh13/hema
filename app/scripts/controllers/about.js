'use strict';

/**
 * @ngdoc function
 * @name hemaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hemaApp
 */
angular.module('hemaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

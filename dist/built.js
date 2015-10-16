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
;'use strict';

angular.module('hemaApp')
  .controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
  });
;'use strict';

angular.module('hemaApp')
  .controller('contactController', function ($scope) {
    $scope.message = 'Look! I am a contact page.';
  });
;'use strict';

angular.module('hemaApp')
  .controller('mainController', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
  });

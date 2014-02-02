
angular.module('kleiTest', [
  'ngRoute',
  'kleiTest.todo',
  'restangular','kleiTestTemplates'
])
.config(function ($routeProvider, RestangularProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/kleiTest/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });

  RestangularProvider.setBaseUrl('/api');
  RestangularProvider.setRestangularFields({
    id: '_id'
  });
});

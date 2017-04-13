"use strict";

angular.module('route',
  [
    'tabs.route',
    'home.route',
    'serve.route',
    'ys.route',
    'zy.route',
    'order.route',
    'details.route',
    'my.route',
    'login.route'
  ])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/home');
}])

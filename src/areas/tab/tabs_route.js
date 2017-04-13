"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('tabs.route', ['tabs.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('tab',{
        url:'/tab',
        abstract: true,
        templateUrl:'areas/tab/tabs.html',
        controller:'TabsCtrl'
      })
}])

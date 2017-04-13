"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('home.route', ['home.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('tab.home',{
        url:'/home',
        views:{
          'tab-home':{
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl',
          }
        }
      })
}])

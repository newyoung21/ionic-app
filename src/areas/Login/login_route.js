"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('login.route', ['login.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('login',{
        url:'/login',
        templateUrl: 'areas/Login/login.html',
        controller: 'loginCtr',
      })
      .state('register',{
      	url:'/register',
      	templateUrl: 'areas/Login/register.html',
        controller: 'registerCtr'
      })
}])

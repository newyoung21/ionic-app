"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('ys.route', ['ys.controller'])
.config(['$stateProvider', '$urlRouterProvider','$ionicConfigProvider'
  ,function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
      .state('tab.serve.ys',{
        url:'/ys',
        abstract: true,
        templateUrl: 'areas/YsList/ys.html',
        controller: 'YsCtrl'
      })
      .state('tab.serve.ys.news',{
        url:'/news',
        templateUrl:'areas/YsList/yDetails.html',
        controller:'YsNCtrl'
      })
      .state('tab.serve.ys.moods',{
        url:'/moods',
        templateUrl:'areas/YsList/yDetails.html',
        controller:'YsMCtrl'
      })
      .state('tab.serve.ys.evaluate',{
        url:'/evaluate',
        templateUrl:'areas/YsList/yDetails.html',
        controller:'YsECtrl'
      })
}])

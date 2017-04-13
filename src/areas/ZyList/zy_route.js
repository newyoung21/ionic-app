"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('zy.route', ['zy.controller','zy.service','auto.focus'])
.config(['$stateProvider', '$urlRouterProvider','$ionicConfigProvider'
  ,function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
      .state('tab.serve.zy',{
        url:'/zy',
        abstract: true,
        templateUrl: 'areas/ZyList/zy.html',
        controller: 'ZyCtrl'
      })
      .state('tab.serve.zy.news',{
        url:'/news',
        templateUrl:'areas/ZyList/zDetails.html',
        controller:'ZyNCtrl'
      })
      .state('tab.serve.zy.moods',{
        url:'/moods',
        templateUrl:'areas/ZyList/zDetails.html',
        controller:'ZyMCtrl'
      })
      .state('tab.serve.zy.evaluate',{
        url:'/evaluate',
        templateUrl:'areas/ZyList/zDetails.html',
        controller:'ZyECtrl'
      })

}])

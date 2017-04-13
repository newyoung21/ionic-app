"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('serve.route', ['serve.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('tab.serve',{
        url:'/serve',
        abstract: true,
        views:{
          'tab-serve':{
            templateUrl: 'areas/serve/serve.html',
            controller: 'ServeCtrl',
          }
        }
      })
      // .state('tab.serve.news',{
      //   url:'/news',
      //   templateUrl:'areas/serve/sDetails.html',
      //   // controller:'ZyNCtrl'
      // })
      // .state('tab.serve.moods',{
      //   url:'/moods',
      //   templateUrl:'areas/serve/sDetails.html',
      //   controller:'ZyMCtrl'
      // })
      // .state('tab.serve.evaluate',{
      //   url:'/evaluate',
      //   templateUrl:'areas/serve/sDetails.html',
      //   controller:'ZyECtrl'
      // })
}])

"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('my.route', ['my.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('tab.my',{
        url:'/my',
        views:{
          'tab-my':{
            templateUrl: 'areas/my/my.html',
            controller: 'MyCtrl',
          }
        }
      })
      .state('evaluate/:id',{
        url:'/evaluate/:id',
        templateUrl: 'areas/my/evaluate.html',
        controller: 'evaCtrl'
      })
      .state('personage/:id',{
        url:'/personage/:id',
        templateUrl: 'areas/my/personage.html',
        controller: 'preCtrl'
      })
      .state('account/:id',{
        url:'/account/:id',
        templateUrl: 'areas/my/account.html',
        controller: 'accCtrl'
      })
      .state('about',{
        url:'/about',
        templateUrl: 'areas/my/about.html',
        controller: 'abCtrl'
      })
      .state('jszc',{
        url:'/jszc',
        templateUrl: 'areas/my/jszc.html',
        controller: 'jsCtrl'
      })
      .state('collection',{
        url:'/collection',
        templateUrl: 'areas/my/collection.html',
        controller: 'ctCtrl',
        cache:false
      })
}])

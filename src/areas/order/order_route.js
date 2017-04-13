"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('order.route', ['order.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('tab.order',{
        url:'/order',
        abstract: true,
        // cache:false,
        views:{
          'tab-order':{
            templateUrl: 'areas/order/order.html',
            controller: 'OrderCtrl'
          }
        }
      })
      //等待服务
      .state('tab.order.waiting',{
        url:'/waiting',
        templateUrl: 'areas/order/odr-waiting.html',
        controller: 'waCtrl',
        cache:false
      })
      //服务中
      .state('tab.order.inServer',{
        url:'/inServer',
        templateUrl: 'areas/order/odr-inServer.html',
        controller: 'inCtrl',
        cache:false
      })
      //评价
      .state('tab.order.toE',{
        url:'/toE',
        templateUrl: 'areas/order/odr-toE.html',
        controller: 'toCtrl',
        cache:false
      })
      //历史订单
      .state('tab.order.history',{
        url:'/history',
        templateUrl: 'areas/order/odr-history.html',
        controller: 'hiCtrl',
        cache:false
      })
}])

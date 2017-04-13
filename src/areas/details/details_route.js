"use strict";
/**
* tabs_route Module
*
* Description
*/
angular.module('details.route', ['details.controller'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('details/:id',{
        url:'/details/:id',
        templateUrl: 'areas/details/details.html',
        controller: 'DetailsCtrl',
        cache: true,
      })
}])

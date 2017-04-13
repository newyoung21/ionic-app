"use strict";

angular.module('serve.controller', [])
 .controller('ServeCtrl', ['$scope','$location'
  ,function($scope,$location){
    $scope.$location = $location;
      $scope.$watch('$location.path()',function(now){
      var rex = /\/\w+\/\w+\/\w+/g;
      var c = now.match(rex);
      $scope.type=c;
    })
 }])

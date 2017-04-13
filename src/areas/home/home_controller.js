"use strict";

angular.module('home.controller', ['home.service'])
 .controller('HomeCtrl', ['$scope','Hfty',function($scope,Hfty){
 	var getZ = Hfty.getZy(),
 		getY = Hfty.getYs();
 	getZ.then(function(data){
 		$scope.zy = data;
 	})
 	getY.then(function(data){
 		$scope.ys = data;
 	})
 }])

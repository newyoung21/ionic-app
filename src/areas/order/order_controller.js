"use strict";

angular.module('order.controller', ['order.service'])
 .controller('OrderCtrl', ['$scope','OrderFty','$state','$ionicViewSwitcher','$window',function($scope,OrderFty,$state,$ionicViewSwitcher,$window){
 	
 }])
 .controller('waCtrl', ['$scope','indexDB','$ionicPopup','$state','$ionicViewSwitcher'
 	,function($scope,indexDB,$ionicPopup,$state,$ionicViewSwitcher){
 	var user = window.localStorage.getItem('user');
 	if(!user){
 		$state.go('login');
 		// $ionicViewSwitcher.nextDirection("forwoard");
 		return;
 	}
 	//获取订单数据
 	$scope.hide = true;
 	var category = "waiting";
 	indexDB.getOrder(category)
 		.then(function(data){
 			$scope.waiting = data;
 			if(data[0] === undefined){
 				$scope.hide = false;
 			}else{
 				$scope.hide = true;
 			}
 		})
 	//取消订单
 	$scope.showPopup = function(id){
 		$ionicPopup.show({
 			template: '<p class="Sorder">服务单号：'+ id +'</p>',
 			    title: '是否取消',
 			    scope: $scope,
 			    buttons: [
 			      { text: '取消' },
 			      {
 			        text: '<b>确定</b>',
 			        type: 'button-positive',
 			        onTap: function(){
 			          //删除订单号
 			          indexDB.removeOrder(id)
 			          	.then(function(){
 			          		//更新订单数据
 			          		indexDB.getOrder(category)
 			          			.then(function(data){
 			          				$scope.waiting = data;
 			          				if(data[0] == undefined){
 			          					$scope.hide = false;
 			          				}else{
 			          					$scope.hide = true;
 			          				}
 			          			})
 			          	})
 			          }
 			        }
 			    ]
 		})
 	}
 }])
  .controller('inCtrl', ['$scope','indexDB',function($scope,indexDB){
 	//获取正在服务订单数据
 	$scope.hide = true;
 	var category = "inServer";
 	indexDB.getOrder(category)
 		.then(function(data){
 			$scope.inServer = data;
 			if(data[0] === undefined){
 				$scope.hide = false;
 			}else{
 				$scope.hide = true;
 			}
 		})
 }])
  .controller('toCtrl', ['$scope','indexDB',function($scope,indexDB){
 	//获取待评价订单数据
 	$scope.hide = true;
 	indexDB.getAllOrder()
 		.then(function(data){
 			var data = data.slice(0,1);
 			$scope.dai = data;
 			if(data[0] === undefined){
 				$scope.hide = false;
 			}else{
 				$scope.hide = true;
 			}
 		})
 }])
  .controller('hiCtrl', ['$scope','indexDB','$ionicPopup',function($scope,indexDB,$ionicPopup){
 	//获取历史订单数据
 	$scope.hide = true;
 	indexDB.getAllOrder()
 		.then(function(data){
 			$scope.order = data;
 			if(data[0] === undefined){
 				$scope.hide = false;
 			}else{
 				$scope.hide = true;
 			}
 		})
 	$scope.showPopup = function(id){
 		$ionicPopup.show({
 			template: '<p class="Sorder">服务单号：'+ id +'</p>',
 			    title: '是否删除',
 			    scope: $scope,
 			    buttons: [
 			      { text: '取消' },
 			      {
 			        text: '<b>确定</b>',
 			        type: 'button-positive',
 			        onTap: function(){
 			          //删除订单号
 			          indexDB.removeOrder(id)
 			          	.then(function(){
 			          		//更新订单数据
 			          		indexDB.getAllOrder()
 			          			.then(function(data){
 			          				$scope.order = data;
 			          				if(data[0] === undefined){
 			          					$scope.hide = false;
 			          				}else{
 			          					$scope.hide = true;
 			          				}
 			          			})
 			          	})
 			          }
 			        }
 			    ]
 		})
 	}
 }])

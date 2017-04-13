"use strict";

angular.module('login.controller', [])
  .controller('loginCtr', ['$scope','indexDB','$state','$ionicHistory','$ionicPopup',function($scope,indexDB,$state,$ionicHistory,$ionicPopup){
  	$scope.user = {};
  	//登录判断
  	$scope.login = function(){
  		var username = $scope.user.username;
  		indexDB.getUserName(username)
  			.then(function(data){
  				if(data){
  					if(data.password == $scope.user.password){
  						window.localStorage.setItem('user',data.id);
  						$ionicHistory.goBack();
  					}else{
              $ionicPopup.alert({title:"密码错误"});
  					}
  				}else{
            $ionicPopup.alert({title:"用户名不存在"});
  				}
  			})
  	}
  }])
  .controller('registerCtr', ['$scope','indexDB','$state','$ionicViewSwitcher'
  	,function($scope,indexDB,$state,$ionicViewSwitcher){
  	$scope.user ={};
  	$scope.registerForm = function(){
  		$scope.user.img ="images/head.png";
  		//添加用户信息
  		indexDB.addUser($scope.user)
  			.then(function(data){
  				window.localStorage.setItem('user',data);
  				$state.go('tab.my');
  				$ionicViewSwitcher.nextDirection("forwoard");
  			})
  	}
  }])
 


"use strict";

angular.module('my.controller', [])
 .controller('MyCtrl', ['$scope','$state','$ionicViewSwitcher','indexDB','$window',function($scope,$state,$ionicViewSwitcher,indexDB,$window){
 	var user = $window.localStorage.getItem('user');
  	if(!user){
 		$state.go('login');
 		$ionicViewSwitcher.nextDirection("forwoard");
 	}
 	//获取用户信息
 	indexDB.getUser(user)
 		.then(function(data){
 			$scope.user = data;
 		})
 }])
 //评价页面控制器
 .controller('evaCtrl', ['$scope','$stateParams','$filter','indexDB','$state','$ionicHistory','$ionicPopup'
 	,function($scope,$stateParams,$filter,indexDB,$state,$ionicHistory,$ionicPopup){
 	var params =$stateParams.id.split("&");
 	$scope.id = params[0];
 	$scope.order = params[1];
 	$scope.comment={
 		username:"",
 		img:"images/head.png",
 		contnet:"",
 		time:""
 	};
 	$scope.goback = function(){
 		$ionicHistory.goBack();
 	}
 	//提交数据
 	$scope.sub = function(id){
 		var time = $filter('date')(new Date(),'yyyy-MM-dd');
 		$scope.comment.time =time
 		if($scope.a){
 			$scope.comment.username = "匿名";
 		}else{
 			$scope.comment.username ="李逍遥";
 		}
 		indexDB.getLeave($scope.id)
 			.then(function(data){
 				var comment = data.comment;
 				comment.push($scope.comment);
 				indexDB.addLeave($scope.id,comment)
 					.then(function(){
 						$ionicPopup.alert({title:"评价成功"})
 					})
 			})
 	}
 	//评价星数的dom操作
 	var $ul = angular.element(document.querySelectorAll('.pj-ulimg'));
 	$ul.on('click',function(e){
 		var idx = e.target.getAttribute('value'),
 		n = idx-5;
 		if(idx<3){
 			angular.element(this).css('background-position',n*26+'px -60px');
 		}else{
 			angular.element(this).css('background-position',n*26+'px -30px');
 		}
 	})
 }])
//个人质料控制器
 .controller('preCtrl', ['$scope','$ionicPopup','$stateParams','indexDB'
 	,function($scope,$ionicPopup,$stateParams,indexDB){

 	var id = $stateParams.id;
 	//获取会员资料数据
 	indexDB.getUser(id)
 		.then(function(data){
 			$scope.user = data;
 			$scope.username = $scope.user.username;
 		})

 	//修改名称
 	$scope.subName = function(){
 		$scope.user.username = $scope.username;
 		indexDB.putUser($scope.user);
 		$scope.name=false;
 		$scope.background=false;
 	}
 	//修改质料弹出款
 		$scope.img=false;
 		$scope.name=false;
 		$scope.sex=false;
 		$scope.background=false;
 		$scope.ediImg = function($event){
 			$scope.background=true;
 			$scope.img=true;
 		}
 		$scope.ediSex = function($event){
 			$scope.background=true;
 			$scope.sex=true;
 		}
 		$scope.ediName = function($event){
 			$scope.background=true;
 			$scope.name=true;
 		}
 		$scope.dd = function($event){
 			$scope.background=false;
 			$scope.img=false;
 			$scope.name=false;
 			$scope.sex=false;
 		}
 		$scope.member = function(){
 			$ionicPopup.alert({title:"会员名不能更改哦"})
 		}
 }])
//账户与安全
 .controller('accCtrl', ['$scope','$ionicActionSheet','$state','$window'
 	,function($scope,$ionicActionSheet,$state,$window){
 	$scope.ediLingo = function(){
 		$ionicActionSheet.show({
 			destructiveText: '退出登录',
 			titleText: '确定退出当前登录账号么？',
 			cancelText: '取消',
 			cancel: function() {
 			},
 			destructiveButtonClicked: function() {
 			    $window.localStorage.removeItem('user');
 			    $state.go('login');

 			}
 		})
 	}
 	$scope.background = false;
 	$scope.phone = false;
 	$scope.password = false;
 	$scope.ediPhone = function(){
 		$scope.background = true;
 		$scope.phone = true;
 	}
 	$scope.edipassword = function(){
 		$scope.background = true;
 		$scope.password = true;
 	}
 	$scope.dd = function(){
 		$scope.background = false;
 		$scope.phone = false;
 		$scope.password = false;
 	}
 }])
 //关于我们
 .controller('abCtrl', ['$scope', function($scope){
 	
 }])
 //技术支持
 .controller('jsCtrl', ['$scope', function($scope){
 	
 }])
 //收藏页面
 .controller('ctCtrl', ['$scope','indexDB','$ionicPopup',function($scope,indexDB,$ionicPopup){
 	$scope.hide = true;
 	//获取数据
 	indexDB.getCollect()
 		.then(function(data){
 			$scope.datas = data;
 			if(data[0] === undefined){
 				$scope.hide = false;
 			}
 		})
 	//删除数据
 	$scope.data = {showDelete:false};
 	$scope.delete = function(id){
 		indexDB.deleteCollect(id)
 			.then(function(){
 				indexDB.getCollect()
 					.then(function(data){
 						$scope.datas = data;
 						if(data[0] === undefined){
 							$scope.hide = false;
 						}
 					})
 				$ionicPopup.alert({title:"删除成功"});
 			})
 	}
 }])
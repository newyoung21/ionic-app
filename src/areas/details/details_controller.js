"use strict";

angular.module('details.controller', ['details.service','indexedDB'])
  .filter('getId',[function(){
    return function(d,data){
      var dd;
      data.forEach(function(val,index){
        if(val.id == d){
          dd = val;
        }
      })
      return dd; 
    }
  }])
 .controller('DetailsCtrl', ['$scope','$location','$stateParams','DeFty','$filter','$ionicHistory','indexDB','$ionicPopup','$state'
  ,function($scope,$location, $stateParams,DeFty,$filter,$ionicHistory,indexDB,$ionicPopup,$state){
    $scope.goback = function(){
      $ionicHistory.goBack();
    }
    $scope.names = {
      data:[ "11:00 - 12:00", "12:00 - 13:00", "13:00 - 24:00","14:00 - 15:00","16:00 - 17:00",
    "18:00 - 19:00","20:00 - 21:00","22:00 - 23:00","23:00 - 24:00","24:00 - 01:00"]
    }
    

    //获取用户信息  
    var de = DeFty.getData(),
        id = $stateParams.id
    de.then(function(data){
        $scope.goods = $filter('getId')(id,data);
    });
    //获取留言信息
    indexDB.getLeave(id).then(function(data){
      $scope.leave = data.comment;
    });
    //弹出预约确定框
    $scope.showPopup = function(){
      $ionicPopup.show({
        template: '<p class="Sorder">'+$scope.names.rr+'</p>',
            title: '预约时间',
            scope: $scope,
            buttons: [
              { text: '取消' },
              {
                text: '<b>确定</b>',
                type: 'button-positive',
                onTap: function(){
                 var user = window.localStorage.getItem('user');
                 if(user){
                    //保存数据
                    var id = $scope.goods.id,
                        number = $scope.goods.nubmer,
                        name = $scope.goods.name,
                        age = $scope.goods.age,
                        evaluate =$scope.goods.evaluate,
                        img = $scope.goods.samllImg || $scope.goods.smallImg,
                        time = $scope.names.rr;
                    indexDB.addOrder(id,name,number,age,evaluate,img,time)
                      .then(function(){
                        //跳转页面
                        $state.go('tab.order.waiting');
                      })
                    }else{
                         $state.go('login');
                         // $ionicViewSwitcher.nextDirection("forwoard");
                    }
                  }
                }
            ]
      })
    }
    //收藏用户信息
    $scope.collect = function(){
      indexDB.addCollect($scope.goods)
        .then(function(){
          $ionicPopup.alert({title:"收藏成功"});
        })
    }
 }])


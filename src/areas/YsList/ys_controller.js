"use strict";

angular.module('ys.controller', ['ys.service'])
 .controller('YsCtrl', ['$scope','YsFty', function($scope,YsFty){

 }])
 //获取最新数据
 .controller('YsNCtrl', ['$scope','YsFty','$ionicLoading', function($scope,YsFty,$ionicLoading){
    var pro = YsFty.goodsAll();
    pro.then(function(data){
      $scope.goods = data;
    })
    //下拉刷新
    var a = 1,
        b = 4,//每次获取四条数据
        n = 4;//能获取多少次
    $scope.pms_isMoreItemsAvailable = true;
    $scope.loadMore = function(){
      //判断是不是最后一页
      if(a<n){
        $ionicLoading.show({
          template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>'
        })
        var idx = a*b;
      }else{
        $scope.pms_isMoreItemsAvailable = false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        return;
      }
      setTimeout(function(){
         var pro = YsFty.goodsAll(idx);
        pro.then(function(data){
            data.forEach(function(val,index){
              $scope.goods.push(val);
            })
        }).finally(function(){
          a+=1;
          $ionicLoading.hide();
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
      },1000)
        
    }
 }])
 //获取人气排序数据
 .controller('YsMCtrl', ['$scope','YsFty','$ionicLoading',function($scope,YsFty,$ionicLoading){
    var getP = YsFty.getP();
    getP.then(function(data){
       $scope.goods = data;
    })
    //下拉刷新
    var a = 1,
        b = 4,//每次获取四条数据
        n = 4;//能获取多少次
    $scope.pms_isMoreItemsAvailable = true;
    $scope.loadMore = function(){
      //判断是不是最后一页
      if(a<n){
        $ionicLoading.show({
          template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>'
        })
        var idx = a*b;
      }else{
        $scope.pms_isMoreItemsAvailable = false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        return;
      }
      setTimeout(function(){
        var goetP = YsFty.getP(idx);
        getP.then(function(data){
            data.forEach(function(val,index){
              $scope.goods.push(val);
            })
        }).finally(function(){
          a+=1;
          $ionicLoading.hide();
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
      },1000)
    }
 }])
 //获取年龄排序顺序
 .controller('YsECtrl', ['$scope','YsFty','$ionicLoading',function($scope,YsFty,$ionicLoading){
    var getE = YsFty.getE();
    getE.then(function(data){
        $scope.goods = data;
    })
    //下拉刷新
    var a = 1,
        b = 4,//每次获取四条数据
        n = 4;//能获取多少次
    $scope.pms_isMoreItemsAvailable = true;
    $scope.loadMore = function(){
      //判断是不是最后一页
      if(a<n){
        $ionicLoading.show({
          template: '<ion-spinner icon="bubbles" class="spinner-energized"></ion-spinner>'
        })
        var idx = a*b;
      }else{
        $scope.pms_isMoreItemsAvailable = false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        return;
      }
      setTimeout(function(){
        var getE = YsFty.getE(idx);
         getE.then(function(data){
             data.forEach(function(val,index){
               $scope.goods.push(val);
             })
         }).finally(function(){
           a+=1;
           $ionicLoading.hide();
           $scope.$broadcast('scroll.infiniteScrollComplete');
         })
       },1000)
      
    }
 }])

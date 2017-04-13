"use strict";

angular.module('zy.controller', ['zy.service','ys.service'])
 .controller('ZyCtrl', ['$scope','ZyFty','YsFty','$ionicLoading'
  ,function($scope,ZyFty,YsFty,$ionicLoading){
  //上拉刷新
  // $scope.doRefresh = function(){
  //   console.log(123321123);
  //    $scope.$broadcast('scroll.refreshComplete');
  // }
 }])
 //获取最新数据
 .controller('ZyNCtrl', ['$scope','ZyFty','$ionicLoading',function($scope,ZyFty,$ionicLoading){
    var pro = ZyFty.goodsNews;
    pro().then(function(data){
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
        pro(idx).then(function(data){
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
 .controller('ZyMCtrl', ['$scope','ZyFty','$ionicLoading'
  ,function($scope,ZyFty,$ionicLoading){
    //获取数据
    var getP = ZyFty.getP();
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
        var getP = ZyFty.getP(idx);
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
 //获取年龄排序数据
 .controller('ZyECtrl', ['$scope','ZyFty','$ionicLoading', function($scope,ZyFty,$ionicLoading){
    var getE = ZyFty.getE();
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
       var getE = ZyFty.getE(idx);
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

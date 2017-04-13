"use strict";
angular.module('zy.service', [])
  .factory('ZyFty', ['$http','$q','$filter',function($http,$q,$filter){

    var news;
    var popularity;
    var evaluate;
    return {
      //获取最新人员
      goodsNews: function(idx){
         var idx = idx || 0;
        var defer = $q.defer();
        $http.jsonp('http://www.qichangad.com/data/Zall.php?callback=JSON_CALLBACK')
        .success(function (res){
            var news = $filter('limitTo')(res.all,4,idx);
             defer.resolve(news);
        })
        .error(function(){
          alert("出错了");
        })
        return defer.promise;
      },
      //获取人气排序
      getP: function(idx){
        var idx = idx || 0;
        var defer = $q.defer();
        $http.jsonp('http://www.qichangad.com/data/Zall.php?callback=JSON_CALLBACK')
          .then(function(res){
            var sal = $filter('orderBy')(res.data.all,'-sales'),
                moods = $filter('limitTo')(sal,4,idx);
              defer.resolve(moods);
          })
        return defer.promise;
      },
      //获取销量排序
      getE: function(idx){
        var idx = idx || 0;
        var defer = $q.defer();
        $http.jsonp('http://www.qichangad.com/data/Zall.php?callback=JSON_CALLBACK')
          .then(function(res){
            var eva = $filter('orderBy')(res.data.all,'age'),
                lua = $filter('limitTo')(eva,4,idx);
            defer.resolve(lua);
          })
        return defer.promise;
      }
    };
  }])

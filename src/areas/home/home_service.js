"use strict"

angular.module('home.service', [])
.factory('Hfty', ['$http','$q','$filter',function($http,$q,$filter){
	return {
		getZy: function(){
			var defer = $q.defer();
			$http.jsonp('http://www.qichangad.com/data/Zall.php?callback=JSON_CALLBACK')
				.then(function(res){
					var zy = $filter('limitTo')(res.data.all,3);
             		defer.resolve(zy);
				},function(res){
					alert("获取数据出错");
				})
			return defer.promise;
		},

		getYs: function(){
			var defer = $q.defer();
			$http.jsonp('http://www.qichangad.com/data/Yall.php?callback=JSON_CALLBACK')
				.then(function(res){
					var ys = $filter('limitTo')(res.data.all,3);
             		defer.resolve(ys);
				},function(res){
					alert("获取数据出错");
				})
			return defer.promise;
		}
	};
}])
"use strict";
/**
* indexedDB
*
* 客户端数据库
*/
angular.module('indexedDB', ['details.service'])
	.factory('indexDB', ['$q','DeFty', function($q,DeFty){
		const DB_NAME = 'yaoC';
		const DB_VERSION = 1;
		const DB_STORE_NAME = 'leave';
		var db;  
		return {
			//启动数据库
			initDB: function(){
				var req = indexedDB.open(DB_NAME,DB_VERSION),
					defer = $q.defer(),
					me = this;
				req.onsuccess = function(){
					db = this.result;
					defer.resolve();
				}
				req.onerror = function(res){
					alert("数据库出错啦！");
				}
				req.onupgradeneeded = function(evt){
					//创建集合对象--leave
					var leaveStore = evt.currentTarget.result.createObjectStore(DB_STORE_NAME,
						{ keyPath: 'id', autoIncrement: true });
					leaveStore.createIndex('id','id',{ unique: true });
					//创建集合对象--user
					var userStore = evt.currentTarget.result.createObjectStore('user',
						{ keyPath: 'id', autoIncrement: true });
					userStore.createIndex('username','username',{ unique: true });
					//创建集合对象--order
					var orderStore = evt.currentTarget.result.createObjectStore('order',
						{ keyPath: 'order', autoIncrement: true });
					orderStore.createIndex('category','category',{ unique: false });
					//创建收藏集合对象
					var collectStore = evt.currentTarget.result.createObjectStore('collect',
						{ keyPath: 'id', autoIncrement: true });
					setTimeout(function(){
						me.leave();
					},500)
				}
				return defer.promise;
			},
			//初始化给留言数据赋值
			leave: function(){
				DeFty.getLeave().then(function(data){
					var leave = db.transaction(DB_STORE_NAME,'readwrite');
					var store = leave.objectStore(DB_STORE_NAME);
					data.forEach(function(val,index){
						store.add(val);
					})
				})
			},
			//添加留言数据
			addLeave: function(id,comment){
				var defer = $q.defer(),
					id = Number(id),
					leave = db.transaction(DB_STORE_NAME,'readwrite'),
					store = leave.objectStore(DB_STORE_NAME),
					req = store.put({id:id,comment:comment});
					req.onsuccess = function(){
						defer.resolve();
					}
					req.onerror = function(){
						alert("添加留言出错");
					}
					return defer.promise;
			},
			//获取ID留言数据
			getLeave: function(id){
				var defer = $q.defer(),
					id = Number(id),
					leave = db.transaction(DB_STORE_NAME,'readwrite'),
					store = leave.objectStore(DB_STORE_NAME),
					req = store.get(id);
					req.onsuccess = function(evt){
						var data = evt.target.result;
						defer.resolve(data);
					}
					req.onerror = function(){
						alert("获取留言ID数据出错")
					}
				return defer.promise;
			},
			//保存订单数据
			addOrder: function(id,name,number,age,evaluate,img,time){
				var category = "waiting",
					defer = $q.defer(),
					tx = db.transaction('order','readwrite'),
					store = tx.objectStore('order'),
					res = store.add({category:category,id:id,name:name,number:number,age:age,evaluate:evaluate,img:img,time:time});
				res.onsuccess = function(){
					defer.resolve();
				}
				res.onerror = function(){
					alert("保存订单数据出错");
				}
				return defer.promise;
			},
			//获取订单数据
			getOrder: function(category){
				var defer = $q.defer(),
					data = [];
				var store = db.transaction("order","readwrite").objectStore("order"),
					index = store.index("category"),
				    res = index.openCursor();
				res.onsuccess = function(evt){
					var cursor = evt.target.result;
					if(cursor){
						data.push(cursor.value);
						cursor.continue();
					}else{
						defer.resolve(data);
					}
				}
				res.onerror = function(){
					alert("获取订单数据出错");
				}
				return defer.promise;
			},
			//删除订单数据
			removeOrder: function(id){
				var id = Number(id),
					defer = $q.defer(),
					store = db.transaction('order','readwrite').objectStore('order'),
					res = store.delete(id);
				res.onsuccess = function(evt){
					defer.resolve();
				}
				res.onerror = function(){
					alert("删除订单数据出错");
				}
				return defer.promise;
			},
			//获取历史订单数据
			getAllOrder: function(){
				var defer = $q.defer(),
					data = [],
					store = db.transaction('order').objectStore('order'),
					res = store.openCursor();
				res.onsuccess = function(evt){
					var cursor = evt.target.result;
					if(cursor){
						data.push(cursor.value);
						cursor.continue();
					}else{
						defer.resolve(data);
					}
				}
				res.onerror = function(){
					alert("获取历史订单数据出错");
				}
				return defer.promise;
			},
			//添加用户信息
			addUser: function(obj){
				var defer = $q.defer(),
					store = db.transaction('user','readwrite').objectStore('user'),
					req = store.add(obj);
				req.onsuccess = function(evt){
					defer.resolve(evt.target.result);
				}
				req.onerror = function(){
					alert("注册失败");
				}
				return defer.promise;
			},
			//获取用户信息
			getUser: function(id){
				var id = Number(id),
					defer = $q.defer(),
					store = db.transaction('user').objectStore('user'),
					req = store.get(id);
				req.onsuccess = function(evt){
					defer.resolve(evt.target.result);
				}
				req.onerror = function(){
					alert("获取用户信息出错");
				}
				return defer.promise;
			},
			//获取用户名是否存在
			getUserName: function(name){
				var defer = $q.defer(),
					store = db.transaction('user').objectStore('user'),
					req = store.index('username').get(name)
				req.onsuccess = function(evt){
					defer.resolve(evt.target.result);
				}
				req.onerror = function(){
					alert("获取用户信息出错");
				}
				return defer.promise;
			},
			//修改用户信息
			putUser: function(obj){
				var defer = $q.defer(),
					store = db.transaction('user','readwrite').objectStore('user'),
					req = store.put(obj);
				req.onsuccess = function(evt){
					defer.resolve(evt.target.result);
				}
				req.onerror = function(){
					alert("获取用户信息出错");
				}
				return defer.promise;
			},
			//添加收藏信息
			addCollect: function(obj){
				var defer = $q.defer(),
					store = db.transaction('collect','readwrite').objectStore('collect'),
					req = store.add(obj);
				req.onsuccess = function(evt){
					defer.resolve(evt.target.result);
				}
				req.onerror = function(){
					alert("获取用户信息出错");
				}
				return defer.promise;
			},
			//获取收藏信息
			getCollect: function(){
				var defer = $q.defer(),
					data = [],
					store = db.transaction('collect').objectStore('collect'),
					req = store.openCursor();
				req.onsuccess = function(evt){
					var cursor = evt.target.result;
					if(cursor){
						data.push(cursor.value);
						cursor.continue();
					}else{
						defer.resolve(data);
					}
				}
				req.onerror = function(){
					alert("获取用户信息出错");
				}
				return defer.promise;
			},
			//删除收藏信息
			deleteCollect: function(id){
				var id = Number(id),
					defer = $q.defer(),
					store = db.transaction('collect','readwrite').objectStore('collect'),
					res = store.delete(id);
				res.onsuccess = function(){
					defer.resolve();
				}
				res.onerror = function(){
					alert("删除收藏数据出错");
				}
				return defer.promise;
			}
		};
	}])
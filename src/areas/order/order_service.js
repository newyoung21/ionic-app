"use strict";

/**
* order.service Module
*
* Description
*/
angular.module('order.service', [])
  .factory('OrderFty', ['$http', function($http){
    var inServer =[
      {
        SerrveOrder:12334,
        name:"青青",
        nubmer:3322,
        time : "18:00-22:00",
        evaluate: 400,
        sales: 201,
        age: 23,
        img: "images/img/1-9.jpg"
      }
    ];
    var oEvaluate = [
      {
        SerrveOrder:87689,
        name:"沐沐",
        nubmer:3322,
        time : "18:00-22:00",
        evaluate: 400,
        sales: 201,
        age: 23,
        img: "images/img/1.jpg"
      }
    ];
    return{
      //服务中
      // getInServer: function(){
      //   return inServer;
      // },
      // //待服务
      // getWaiting:function(){
      //   return waiting;
      // },
      // //待评价
      // Toevaluate: function(){
      //   return toEvaluate;
      // },
      // //历史订单
      // history: function(){
      //   return AllDorder;
      // }
    };
  }])

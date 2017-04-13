"use strict";
//自定义点击按钮变化样式指令
angular.module('auto.focus', [])
  .directive('autoFocus', ['$location', function($location){
    return {
      restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      link: function($scope, iElm, iAttrs, controller) {
        iElm.on('click',function(){
          iElm.parent().parent().find('a').removeClass('yellewAc');
          iElm.addClass('yellewAc');
        })
      }
    };
  }]);

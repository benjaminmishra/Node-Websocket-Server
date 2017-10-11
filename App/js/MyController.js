'use strict';
var app = angular.module('myApp', ['ngWebSocket']);

app.controller('MyController', function($scope, MyData) {


  $scope.MyData = MyData;
  console.log($scope.MyData);
  $scope.eventList = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
    }];

});

app.factory('MyData', function($websocket) {
  // Open a WebSocket connection
  var dataStream = $websocket('ws://localhost:80');

  var collection = [];

  dataStream.onMessage(function(message) {
    collection.push(JSON.parse(message.data));
  });

  var methods = {
    collection: collection,
    get: function() {
      dataStream.send(JSON.stringify({ action: 'get' }));
    }
  };
  return methods;
})

app.directive('notifications', function() {
	  
    return {
      restrict: 'EA',
      transclude: true,
      templateUrl: '../pages/template.html',
      scope: {eventInfo : "=info"},
      link: function(scope, element, attrs, controller) {
        
        /*scope.viewModel = {
          showTemplateA: false,
          showTemplateB: false
        };
        
        scope.toggleTemplateA = function () {

          scope.viewModel.showTemplateA = !scope.viewModel.showTemplateA;
          
          scope.viewModel.showTemplateB = false;          
        };
        
        scope.toggleTemplateB = function () {
          
          scope.viewModel.showTemplateB = !scope.viewModel.showTemplateB;
          
          scope.viewModel.showTemplateA = false;
        };*/

      }
    };
  });

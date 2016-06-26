angular.module('starter.controllers', [])
.controller('LoginCtrl',function($scope) {
  
})
.controller('SetupCtrl', function($scope,$window) {
  $scope.mqtt={};
  $scope.mqtt.host=null;
  $scope.mqtt.port=null;
  $scope.mqtt.username=null;
  $scope.mqtt.password=null;
  $scope.mqtt.ssl=null;
  $scope.connect=function(){
     window.localStorage.setItem('mqtt',JSON.stringify($scope.mqtt));
     console.log("saved data!!");
     console.log(window.localStorage["mqtt"]);
   };
  
})
.controller('DashCtrl', function($scope) {
  
});
/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/

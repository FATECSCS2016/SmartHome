angular.module('starter.controllers', [])
.controller('LoginCtrl',function($scope) {
  
})
.controller('SetupCtrl', function($scope,$window) {
  $scope.mqtt=mqtt = JSON.parse(window.localStorage["mqtt"]);
  console.log(window.localStorage["mqtt"]);
  $scope.connect=function(){
     window.localStorage.setItem("mqtt",JSON.stringify($scope.mqtt));
     console.log("saved data!!");
     console.log(window.localStorage["mqtt"]);
   };
  
})
.controller('AppCtrl', function($scope){
    $scope.ois=[1,2,3];
})
.controller('HomeCtrl', function($scope,Rooms) {
  $scope.rooms = Rooms.all();
  
})
.controller('DevicesCtrl', function($scope,$stateParams,Rooms){
    $scope.room=Rooms.get($stateParams.idDevice);
    $scope.devices=$scope.room.devices;
});
/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/

angular.module('starter.controllers', [])
.controller('LoginCtrl',function($scope) {

})
.controller('SetupCtrl', function($scope,$window,mqtt) {
  var mqttStorage = window.localStorage["mqtt"] ;
  //check if the settings are already saved on the localStorage
  if(mqttStorage!=undefined){
     $scope.mqtt= JSON.parse(mqttStorage);
  }else{
    $scope.mqtt={};
  }
  $scope.connect=function(){
     window.localStorage.setItem("mqtt",JSON.stringify($scope.mqtt));
     console.log("saved data!!");
     console.log(window.localStorage["mqtt"]);
     mqtt.connect($scope.mqtt.host,
                  $scope.mqtt.port,
                  $scope.mqtt.username,
                  $scope.mqtt.password
                  ).then(function(){
                      /*mqtt.on(function (message) {
                        console.log("Setup controller " +message.payloadString);
                        $scope.teste=message.payloadString;
                      });*/
                      console.log("Successfully connected!");
                  });
  };

})
.controller('AppCtrl', function($scope){
    $scope.ois=[1,2,3];
})
.controller('HomeCtrl', function($scope,Rooms,mqtt) {
  $scope.rooms = Rooms.all();
  /*$scope.connect=function(){
    mqtt.connect("192.168.174.56",9001,"admin","redhat").then(function(){
      console.log("Successfully connected!");
    });
   /* mqtt.on(function (message) {
      console.log(message.payloadString);
      $scope.teste=message.payloadString;
    });

  };*/
  $scope.$on('message', function (event, data) {
    console.log(data); // 'Data to send'
  });





  /*mqtt.on(function (message) {
    console.log(message.payloadString);
    $scope.teste=message.payloadString;
  });*/
})
.controller('DevicesCtrl', function($scope,$stateParams,Rooms){
    $scope.room=Rooms.get($stateParams.idDevice);
    $scope.devices=$scope.room.devices;
});
/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/

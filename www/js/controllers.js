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
  
})

.controller('AppCtrl', function($scope){
    $scope.ois=[1,2,3];
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.ois=[1,2,3];
  
});
/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/

angular.module('starter.services')
.factory('mqtt', function ($rootScope,$q) {
  var client = {};
  var connected = false;
  return {
    connect: function (url,port,username, password, ssl) {
      console.log(connected);
      var deferred = $q.defer();
      if(connected==true){
        console.log("client already connected!!!");
        deferred.resolve();
      }else{
        client = new Paho.MQTT.Client(url,port,"testClient");
        var properties = {};
        properties.onFailure=onFailure;
        properties.onSuccess=onConnect;
        if(username!=undefined && password!=undefined){
          properties.userName=username;
          properties.password=password;
        }
        client.connect(properties);
        function onConnect() {
          client.subscribe('#');
          connected = true;
          var message
          client.onMessageArrived=function (message) {
             $rootScope.$broadcast('message',message);
          };
          deferred.resolve();
        };
        function onFailure(invocationContext, errorCode, errorMessage){
          connected = false;
          console.log(errorCode);
          deferred.reject(errorMessage);
        }
      }
      return deferred.promise;
    },
    /**
     * on message arrived
     */
    on: function (callback) {
        client.onMessageArrived=function () {
          var arg=arguments;
          console.log(arg);
          $rootScope.$apply(function () {
            callback.apply(null,arg);
          });
        }
    },subscribe:function (topic) {
      if(connected){
        client.subscribe(topic);
      }
    },
    emit:function (message) {
      if(connected){
        client.send(message);
      }
    },
    disconnect:function () {
      if(connected){
        client.disconnect();
      }
    },
    isConnected:function () {
      return connected;
    }
  };
});

angular.module('starter.services')
.factory('mqtt', function ($rootScope,$q) {
  var client = {};
  var connected = false;
  return {
    connect: function (url,port,username, password, ssl) {
      console.log(url);
      var deferred = $q.defer();
      client = new Paho.MQTT.Client(url,port,"testClient");
      client.connect({onSuccess:onConnect,
          userName:username,
          password:password,
          onFailure: onFailure});
      function onConnect() {
        var connected = true;
        deferred.resolve();
      };
      function onFailure(invocationContext, errorCode, errorMessage){
        var connected = false;
        console.log(errorCode);
        deferred.reject(errorMessage);
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

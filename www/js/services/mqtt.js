angular.module('starter.services')
.factory('mqtt', function ($rootScope,$q,messages) {
  var client = {};
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
        client.subscribe("#");
        deferred.resolve();
      };
      function onFailure(invocationContext, errorCode, errorMessage){
        deferred.reject(errorMessage);
        console.log(errorCode);
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
    }
  };
});


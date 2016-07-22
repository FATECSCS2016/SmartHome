angular.module('starter.services', [])

.factory('Rooms', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rooms = [{
    name:'Quarto',
    id:0,
    devices:[
      {
        name:'Lampada',
        type:'switch',
        value:false,
      },
      {
        name:'Temperatura',
        type:'sensor',
        value:35,
      },
      {
        name:'Led',
        type:'toggle',
        value:35,
      },
    ]
  },
  {
    name:'Sala',
    id:1,
    devices:[
      {
        name:'Lampada',
        type:'switch',
        value:false,
      },
      {
        name:'Temperatura',
        type:'sensor',
        value:35,
      },
    ]
  },
  {
    name:'Cozinha',
    id:2,
    devices:[
      {
        name:'Lampada',
        type:'switch',
        value:false,
      },
      {
        name:'Temperatura',
        type:'sensor',
        value:35,
      },
    ]
  }];
  return {
    all: function() {
      return rooms;
    },
    remove: function(chat) {
      rooms.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].id === parseInt(chatId)) {
          return rooms[i];
        }
      }
      return null;
    }
  };
})
.factory("mqtt",function($q, $rootScope) {
  var client = {}; 
  function onMessageArrived(message) {
    console.log(message.destinationName);
    console.log(message.payloadString);
  }
  return {
    connect:function() {
      var deferred = $q.defer();
        client = new Paho.MQTT.Client("10.42.0.1",9001,"testClient");
        client.onMessageArrived=onMessageArrived;
        client.connect({onSuccess:onConnect,
          userName:'admin',
          password:'redhat',
          onFailure: onFailure});
          function onConnect() {
            console.log("connected");
            client.subscribe("#");
            deferred.resolve();
          };
          function onFailure(invocationContext, errorCode, errorMessage){
            deferred.reject(errorMessage);
          }
        
      return deferred.promise;    
    },
    subscribe: function(topico) {
      
    },
    publish: function(topico, mensagem) {
      message = new Paho.MQTT.Message(mensagem);
      message.destinationName = topico;
      client.send(message);
    }
  };  
});
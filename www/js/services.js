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
});

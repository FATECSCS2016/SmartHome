// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform,$window,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
  var mqtt={
    host:null,
    port:null,
    ssl:null,
    username:null,
    password:null
  };
  //mqtt = JSON.parse(window.localStorage["mqtt"]);
 // console.log("Verifying User Session..." + user);
  if(mqtt == undefined || mqtt.host==null || mqtt.port == null){
    console.log('Going to login');
    $state.go('app.settings');
  }else{
    console.log(mqtt);
    console.log('Going to devices');
    //Socket.connect(host,port,user,password);
    $state.go('app.home');
  }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  // Each tab has its own nav history stack:
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
   .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SetupCtrl'
        }
      }
    })
    .state('app.devices', {
      url: '/devices/:idDevice',
      views: {
        'menuContent': {
          templateUrl: 'templates/devices.html',
          controller: 'DevicesCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
 // $urlRouterProvider.otherwise('/setup');
 $urlRouterProvider.otherwise('/app/home');
});

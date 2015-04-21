//// Ionic Starter App
//
//// angular.module is a global place for creating, registering and retrieving Angular modules
//// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
//// the 2nd parameter is an array of 'requires'
//angular.module('sl-lottery-results', ['ionic'
//])
//
//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
//})


(function() {
  'use strict';
  angular.module('sl-lottery-results', [
    'ionic',
    'sl-lottery-results.main',
    'sl-lottery-results.home'
  ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider,
               $urlRouterProvider) {
        $stateProvider

          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
          })

          .state('app.home', {
            url: '/home',
            views: {
              'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
              }
            }
          });

        $urlRouterProvider.otherwise('/app/home');
      }]);
})();


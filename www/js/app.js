// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-material', 'ngCordova'])

.run(function($ionicPlatform, $ionicTabsDelegate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    $ionicTabsDelegate.select(0);
      var didReceiveRemoteNotificationCallBack = function(jsonData) {
              if(jsonData.url) {
                  $state.go("tab.job-detail", {"jobId": jsonData.url})
              }
      }
      window.plugins.OneSignal.init("0304582e-3164-11e5-ba58-b71da7ab405ff",
          {googleProjectNumber: "1144234217263", autoRegister: true},
          didReceiveRemoteNotificationCallBack);
      window.plugins.OneSignal.registerForPushNotifications();
      window.plugins.OneSignal.getIds(function(ids) {
          localStorage.setItem("pushId", ids.userId);
      });
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.tabs.position("bottom");
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.questions', {
    url: '/questions',
    views: {
      'tab-questions': {
        templateUrl: 'templates/tab-questions.html',
        controller: 'QuestionsCtrl'
      }
    }
  })

  .state('tab.jobs', {
      url: '/jobs',
      views: {
        'tab-jobs': {
          templateUrl: 'templates/tab-jobs.html',
          controller: 'JobsCtrl'
        }
      }
    })
    .state('tab.job-detail', {
      url: '/jobs/:jobId',
      views: {
        'tab-jobs': {
          templateUrl: 'templates/job-detail.html',
          controller: 'JobDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/questions');

});

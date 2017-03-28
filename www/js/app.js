// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'app.services',
  'app.directives'
])
.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  

/***** recipes stuff *****/
.state('app.weeklymenu', {
      url: '/weeklymenu',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklymenu.html',
          controller: 'weeklyMenuCtrl'
        }
      }
    })

.state('app.gleditdelete', {
      url: '/gleditdelete',
      views: {
        'menuContent': {
          templateUrl: 'templates/gl-edit-delete.html',
          controller: 'groceryListEditDeleteCtrl'
        }
      }
    })



// .state('app.previousweek', {
//       url: '/weeklymenu/:id',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/weeklymenu.html',
//           controller: 'weeklyMenuPrevCtrl'
//         }
//       }
//     })

// .state('app.recipe1', {
//       url: '/recipe1',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/recipe1.html',
//           controller: 'singleRecipeCtrl'
//         }
//       }
//     })

// .state('app.login1', {
//       url: '/login1',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/login1.html',
//           controller: 'loginCtrl'
//         }
//       }
//     })

// .state('app.signup', {
//       url: '/signup',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/signup.html',
//           controller: 'signupCtrl'
//         }
//       }
//     })

// .state('app.freerecipes', {
//       url: '/freerecipes',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/freerecipes.html',
//           controller: 'freeRecipesCtrl'
//         }
//       }
//     })


// .state('app.glsettings', {
//       url: '/glsettings',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/glsettings.html',
//           controller: 'groceryListSettingsCtrl'
//         }
//       }
//     })

// .state('app.gl', {
//       url: '/gl',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/gl.html',
//           controller: 'groceryListCtrl'
//         }
//       }
//     })








  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/weeklymenu');
  // $urlRouterProvider.otherwise('/app/gleditdelete');
  // $urlRouterProvider.otherwise('/app/playlists');
});

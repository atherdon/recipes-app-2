// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
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

// .state('app.recipe2', {
//       url: '/recipe2',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/recipe2.html',
//           controller: 'styledSingleRecipeCtrl'
//         }
//       }
//     })

// .state('app.ingredients', {
//       url: '/ingredients',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/ingredients.html',
//           controller: 'ingredientsCtrl'
//         }
//       }
//     })

// .state('app.recipe3', {
//       url: '/recipe3',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/recipe3.html',
//           controller: 'uXSingleRecipeCtrl'
//         }
//       }
//     })

// .state('app.recipe4', {
//       url: '/recipe4',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/recipe4.html',
//           controller: 'uXSingleRecipe2Ctrl'
//         }
//       }
//     })

// .state('app.directions', {
//       url: '/directions',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/directions.html',
//           controller: 'directionsCtrl'
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

// .state('app.calendar', {
//       url: '/calendar',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/calendar.html',
//           controller: 'recipesCalendarCtrl'
//         }
//       }
//     })


// .state('app.drygoods', {
//       url: '/drygoods',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/drygoods.html',
//           controller: 'dRYGOODSCtrl'
//         }
//       }
//     })








  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

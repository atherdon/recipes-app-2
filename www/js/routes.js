
angular.module('app.routes', [
  'ionicUIRouter'
])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//   .state('app.search', {
//     url: '/search',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/search.html'
//       }
//     }
//   })

  
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


.state('app.previousweek', {
      url: '/weeklymenu/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklymenu.html',
          controller: 'weeklyMenuPrevCtrl'
        }
      }
    })

  
  
.state('app.recipe1', {
      url: '/recipe1',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipe1.html',
          controller: 'singleRecipeCtrl'
        }
      }
    })

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

.state('app.freerecipes', {
      url: '/freerecipes',
      views: {
        'menuContent': {
          templateUrl: 'templates/freerecipes.html',
          controller: 'freeRecipesCtrl'
        }
      }
    })

.state('app.recipe2', {
      url: '/recipe2',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipe2.html',
          controller: 'styledSingleRecipeCtrl'
        }
      }
    })

.state('app.ingredients', {
      url: '/ingredients',
      views: {
        'menuContent': {
          templateUrl: 'templates/ingredients.html',
          controller: 'ingredientsCtrl'
        }
      }
    })

.state('app.recipe3', {
      url: '/recipe3',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipe3.html',
          controller: 'uXSingleRecipeCtrl'
        }
      }
    })

.state('app.recipe4', {
      url: '/recipe4',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipe4.html',
          controller: 'uXSingleRecipe2Ctrl'
        }
      }
    })

.state('app.directions', {
      url: '/directions',
      views: {
        'menuContent': {
          templateUrl: 'templates/directions.html',
          controller: 'directionsCtrl'
        }
      }
    })

.state('app.glsettings', {
      url: '/glsettings',
      views: {
        'menuContent': {
          templateUrl: 'templates/glsettings.html',
          controller: 'groceryListSettingsCtrl'
        }
      }
    })

.state('app.gl', {
      url: '/gl',
      views: {
        'menuContent': {
          templateUrl: 'templates/gl.html',
          controller: 'groceryListCtrl'
        }
      }
    })

.state('app.calendar', {
      url: '/calendar',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendar.html',
          controller: 'recipesCalendarCtrl'
        }
      }
    })

//@todo finish it
// .state('app.category', {
//       url: '/category/:categoryId',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/category.html',
//           controller: 'categoryCtrl'
//         }
//       }
//     })

.state('app.department', {
      url: '/department/:departmentId',
      views: {
        'menuContent': {
          templateUrl: 'templates/department.html',
          controller: 'departmentCtrl'
        }
      }
    })


  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.groceryList'
      2) Using $state.go programatically:
        $state.go('tabsController.groceryList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page14
      /page1/tab3/page14
  */
//   .state('tabsController.groceryList', {
//     url: '/page14',
//     views: {
//       'tab2': {
//         templateUrl: 'templates/groceryList.html',
//         controller: 'groceryListCtrl'
//       },
//       'tab3': {
//         templateUrl: 'templates/groceryList.html',
//         controller: 'groceryListCtrl'
//       }
//     }
//   })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.recipesCalendar'
      2) Using $state.go programatically:
        $state.go('tabsController.recipesCalendar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page15
      /page1/tab3/page15
  */
//   .state('tabsController.recipesCalendar', {
//     url: '/page15',
//     views: {
//       'tab2': {
//         templateUrl: 'templates/recipesCalendar.html',
//         controller: 'recipesCalendarCtrl'
//       },
//       'tab3': {
//         templateUrl: 'templates/recipesCalendar.html',
//         controller: 'recipesCalendarCtrl'
//       }
//     }
//   })



$urlRouterProvider.otherwise('/app/freerecipes')

  

});

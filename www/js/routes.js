
angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('tabsController.weeklyMenu', {
      url: '/weeklyMenu',
      views: {
        'tab1': {
          templateUrl: 'templates/weeklyMenu.html',
//          controller: 'weeklyMenuCtrl'
          controller: 'weeklyMenuList'
          
        }
      }
    })


  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })


  .state('tabsController.recipe', {
    url: '/recipe',
    views: {
      'tab1': {
        templateUrl: 'templates/recipe.html',
        controller: 'recipe'
      }
    }
  })


  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'introCtrl'
  })


  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })


  .state('freeRecipes', {
    url: '/page8',
    templateUrl: 'templates/freeRecipes.html',
    controller: 'freeRecipesCtrl'
  })


  .state('styledSingleRecipe', {
    url: '/page9',
    templateUrl: 'templates/styledSingleRecipe.html',
    controller: 'styledSingleRecipeCtrl'
  })


  .state('ingredients', {
    url: '/page10',
    templateUrl: 'templates/ingredients.html',
    controller: 'ingredientsCtrl'
  })

  .state('directions', {
    url: '/page12',
    templateUrl: 'templates/directions.html',
    controller: 'directionsCtrl'
  })


  .state('tabsController.groceryListSettings', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/groceryListSettings.html',
        controller: 'groceryListSettingsCtrl'
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
  .state('tabsController.groceryList', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/groceryList.html',
        controller: 'groceryListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/groceryList.html',
        controller: 'groceryListCtrl'
      }
    }
  })

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
  .state('tabsController.recipesCalendar', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/recipesCalendar.html',
        controller: 'recipesCalendarCtrl'
      },
      'tab3': {
        templateUrl: 'templates/recipesCalendar.html',
        controller: 'recipesCalendarCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.dRYGOODS'
      2) Using $state.go programatically:
        $state.go('tabsController.dRYGOODS');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page16
      /page1/tab3/page16
  */
  .state('tabsController.dRYGOODS', {
    url: '/page16',
    views: {
      'tab2': {
        templateUrl: 'templates/dRYGOODS.html',
        controller: 'dRYGOODSCtrl'
      },
      'tab3': {
        templateUrl: 'templates/dRYGOODS.html',
        controller: 'dRYGOODSCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});

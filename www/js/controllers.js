angular.module('starter.controllers', ['app.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



/* recipes stuff */
.controller('weeklyMenuCtrl', function($scope, $stateParams, WeeklyMenu) {

  // console.log('123');

  // console.log( $stateParams );

  var WM = new WeeklyMenu();

  // WM.getItemsForWeeklyMenuPage().then(function(){

  //    WM.getRecipesById(1);
    
  //   $scope.meta  = WM.meta;
  //   $scope.items = WM.items;
  //   // console.log(items)
    

  // });
WM.getRecipesById(1).then(function(){

     // WM.getRecipesById(1);
    
    // $scope.meta  = WM.meta;
    // $scope.items = WM.items;
    // console.log(items)
    

  });





})

.controller('groceryListEditDeleteCtrl', function($scope, $stateParams ){

  $scope.groceries = [
        "Bananas", "Apples", "Oranges", "Milk", "Eggs", "Bread",
        "Cereal", "Beef", "Napkins", "Cheese", "Peanut Butter"
  ];

  $scope.removeGrocery = function( grocery ) {
    $scope.groceries.splice(
      $scope.groceries.indexOf( grocery ), 1 );
  };

  $scope.onItemDelete = function( grocery ) {
    var message = "Are you sure you want to delete " + grocery + "?";
    navigator.notification.confirm( message, function( index ) {
      if ( index === 1 ) {
        $scope.removeGrocery( grocery );
        $scope.$apply();
      }
    });
  };

  //@TODO add socialsharing plugin. not working right now
  $scope.onShare = function() {

    console.log('click');
    // window.plugins.socialsharing.share(
    //   $scope.groceries.join( ", " ) 
    // );

  };

})

// .controller('weeklyMenuPrevCtrl', function($scope, $stateParams, weeklyMenuAlterFactory) {

//   // console.log('123');

//   console.log( $stateParams );

//   weeklyMenuAlterFactory.get().then(function(response){

//       $scope.data = response.data;
//   })

// })



.controller('loginCtrl', function($scope, $stateParams) {
})

.controller('signupCtrl', function($scope, $stateParams) {
})

// .controller('freeRecipesCtrl', function($scope, $stateParams, freeRecipes) {

//   var List = new FreeRecipes();

//   List.fetch().then(function(){

    
//     $scope.array = List.list;
    
//   });

// })


// .controller('ingredientsCtrl', function($scope, $stateParams, Ingredients) {

//   var List = new Ingredients();

//   List.fetch().then(function(){

    
//     $scope.array = List.list;
    
//   });

// })



// .controller('directionsCtrl', function($scope, $stateParams, Directions) {

//   var List = new Directions();

//   List.fetch().then(function(){

    
//     $scope.array = List.list;
    
//   });

// })

// .controller('singleRecipeCtrl', function($scope, $stateParams) {

//   var recipe = new Grocery( $stateParams.recipeId );

//   recipe.fetch().then(function(){

//     // check if recipe have all important information. This is not completed. Must be.
//     if( recipe ){

//       // $scope.title       = GL.name;
//       // $scope.ingredients = GL.items;

//     } else {

//       $scope.message = "Nukhua netu dannuh y recepta etogo";
//     }

//     // console.log( recipe );
    
//     $scope.title       = GL.name;
//     $scope.ingredients = GL.items;
//   });

// })

// .controller('styledSingleRecipeCtrl', function($scope, $stateParams) {

// })

// .controller('uXSingleRecipeCtrl', function($scope, $stateParams) {

// })

// .controller('uXSingleRecipe2Ctrl', function($scope, $stateParams) {


// })

// .controller('groceryListSettingsCtrl', function($scope, $stateParams, Settings) {


// })

// .controller('groceryListCtrl', function($scope, $stateParams, groceryCategory) {

// //@TODO remove getting info and move it to services.
// //Looks awful right now. Also remove not necessary variables from constructor and method
    
//     groceryCategory.getCategories( function(data){

//       console.log(data);

//       $scope.categories = data;

//     });

// })

// .controller('recipesCalendarCtrl', function($scope, $stateParams, Calendar) {

//   var Cal = new Calendar();

//   Cal.fetch().then(function(){

    
//     $scope.week = Cal.week;
    
//   });

   
// })

// .controller('categoryCtrl', function($scope, $stateParams, Grocery) {


// //    @TODO create a service method for getting only values(array) for only one category.
// //    get needed category id from service method with passing category id from view
// // remove pages like grocery food categories and create a groceryCategoryList with passing data to it

// // @TODO add page for flushing checkboxes



//   // console.log( $stateParams.categoryId );

//   var GL = new Grocery( $stateParams.categoryId );

//   GL.getCategory().then(function(){

//     // console.log( GL );
    
//     $scope.title       = GL.name;
//     $scope.ingredients = GL.items;
//   });


// })

;

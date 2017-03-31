angular.module('starter.controllers', ['app.services'])



/* recipes stuff */
.controller('weeklyMenuCtrl', function($scope, $stateParams, WM2) {

  // console.log('123');

  // console.log( $stateParams );

  var WM = new WeeklyMenu();
  WM.fetch().then(function(){

    WM.getItemsForWeeklyMenuPage();
    // $scope.week = WM.week;
    
  });

  // weeklyMenuAlterFactory.get().then(function(response){

  //     $scope.data = response.data;
  // })



})

.controller('weeklyMenuPrevCtrl', function($scope, $stateParams, weeklyMenuAlterFactory) {

  // console.log('123');

  console.log( $stateParams );

  weeklyMenuAlterFactory.get().then(function(response){

      $scope.data = response.data;
  })

})


.controller('freeRecipesCtrl', function($scope, $stateParams, freeRecipes) {

  var List = new FreeRecipes();

  List.fetch().then(function(){

    
    $scope.array = List.list;
    
  });

})


.controller('ingredientsCtrl', function($scope, $stateParams, Ingredients) {

  var List = new Ingredients();

  List.fetch().then(function(){

    
    $scope.array = List.list;
    
  });

})



.controller('directionsCtrl', function($scope, $stateParams, Directions) {

  var List = new Directions();

  List.fetch().then(function(){

    
    $scope.array = List.list;
    
  });

})


.controller('singleRecipeCtrl', function($scope, $stateParams, Recipe) {

  var recipe = new Recipe( $stateParams.recipeId );

  recipe.fetch().then(function(){

    // check if recipe have all important information. This is not completed. Must be.
    if( recipe ){

      // $scope.title       = GL.name;
      // $scope.ingredients = GL.items;

    } else {

      $scope.message = "Nukhua netu dannuh y recepta etogo";
    }

    // console.log( recipe );
    $scope = recipe;
    // $scope.title       = GL.name;
    // $scope.ingredients = GL.items;

  });

})

.controller('styledSingleRecipeCtrl', function($scope, $stateParams, recipe) {

})

.controller('uXSingleRecipeCtrl', function($scope, $stateParams, recipe) {

})

.controller('uXSingleRecipe2Ctrl', function($scope, $stateParams, recipe) {


})



.controller('groceryListSettingsCtrl', function($scope, $stateParams, Settings) {


})

.controller('groceryListCtrl', function($scope, $stateParams, groceryCategory) {

//@TODO remove getting info and move it to services.
//Looks awful right now. Also remove not necessary variables from constructor and method
    
    groceryCategory.getDepartments( function(data){

      console.log(data);

      $scope.departments = data;

    });

})

.controller('recipesCalendarCtrl', function($scope, $stateParams, Calendar) {

  var Cal = new Calendar();

  Cal.fetch().then(function(){

    
    $scope.week = Cal.week;
    
  });

   
})

.controller('categoryCtrl', function($scope, $stateParams, Grocery) {


//    @TODO create a service method for getting only values(array) for only one category.
//    get needed category id from service method with passing category id from view
// remove pages like grocery food categories and create a groceryCategoryList with passing data to it

// @TODO add page for flushing checkboxes



  // console.log( $stateParams.categoryId );

  var GL = new Grocery( $stateParams.departmentId );

  GL.getDepartments().then(function(){

    // console.log( GL );
    
    $scope.title       = GL.name;
    $scope.ingredients = GL.items;
  });


})

;

angular.module('starter.controllers', [
  'app.services'
  ])


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

.controller('styledSingleRecipeCtrl', function($scope, $stateParams, Recipe) {

})

.controller('uXSingleRecipeCtrl', function($scope, $stateParams, Recipe) {

})

.controller('uXSingleRecipe2Ctrl', function($scope, $stateParams, Recipe) {


})
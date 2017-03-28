angular.module('starter.controllers', [
  'app.services'
  ])


.controller('groceryListSettingsCtrl', function($scope, $stateParams, Settings) {


})

.controller('groceryListCtrl', function($scope, $stateParams, groceryCategory) {

//@TODO remove getting info and move it to services.
//Looks awful right now. Also remove not necessary variables from constructor and method
    
    groceryCategory.getCategories( function(data){

      console.log(data);

      $scope.categories = data;

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

  var GL = new Grocery( $stateParams.categoryId );

  GL.getCategory().then(function(){

    // console.log( GL );
    
    $scope.title       = GL.name;
    $scope.ingredients = GL.items;
  });


})
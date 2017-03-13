angular.module('starter.controllers', ['app.services'])


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




;

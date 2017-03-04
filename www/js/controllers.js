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
.controller('weeklyMenuCtrl', function($scope, $stateParams, weeklyMenuAlterFactory) {

  // console.log('123');
  weeklyMenuAlterFactory.get().then(function(response){

      $scope.data = response.data;
  })

})


/* Populate weekly menu page list with recipes data from json */
// .controller('weeklyMenuList', ['$scope', '$stateParams', 'weeklyMenuAlterFactory', 

// function ($scope, $stateParams, weeklyMenuAlterFactory ) {

//   console.log('123');
//   // weeklyMenuAlterFactory.get().then(function(response){
//   //     $scope.data = response.data;
//   // })
        

// }])

.controller('singleRecipeCtrl', function($scope, $stateParams) {
})

.controller('loginCtrl', function($scope, $stateParams) {
})

.controller('signupCtrl', function($scope, $stateParams) {
})

.controller('freeRecipesCtrl', function($scope, $stateParams) {
})

.controller('styledSingleRecipeCtrl', function($scope, $stateParams) {
})

.controller('ingredientsCtrl', function($scope, $stateParams) {
})

.controller('uXSingleRecipeCtrl', function($scope, $stateParams) {
})

.controller('uXSingleRecipe2Ctrl', function($scope, $stateParams) {
})

.controller('directionsCtrl', function($scope, $stateParams) {
})

.controller('groceryListSettingsCtrl', function($scope, $stateParams) {
})

.controller('groceryListCtrl', function($scope, $stateParams) {
})

.controller('recipesCalendarCtrl', function($scope, $stateParams) {
})

.controller('dRYGOODSCtrl', function($scope, $stateParams) {
})

;

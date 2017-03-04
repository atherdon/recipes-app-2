angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])



.factory('weeklyMenuAlterFactory', ['$http', function( $http ){


    return {
            get: function(){

                return $http.get('/js/json/weeklymenu.json');
                // return $http.get('/js/json/recipe.json');
            }
            
    }

}])



;
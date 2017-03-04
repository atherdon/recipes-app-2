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



.service('groceryCategory', ['$http', function( $http ){


    

    return {
            get: function() {
                
                return $http.get('/js/json/grocery.json');
            },
            getCategory: function(callback) {
                
                $http.get('/js/json/grocery.json').then(function(response) {
                    
                    angular.forEach( response.data, function(value, key){

                        if( value.category_id == "3" ){

                            callback(value);
                            
                        }

                    });
                    

                });
                

            },
            getCategories: function(callback){
                
                var array = [];
                
                $http.get('/js/json/grocery.json').then(function(response) {
                    
                    angular.forEach( response.data, function(value, key){

                        array.push({
                            "category_id" : value.category_id,
                            "name"        : value.name
                        });


                    });
                    callback(array);

                });
            }

    }

}])



;
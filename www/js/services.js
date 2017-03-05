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


.factory('Grocery', function($http){

	var Grocery = function ( category_id ){
		this.data        = false;
		this.category_id = category_id;
		// this.category    = false;

		this.getData();
	};

	// Grocery.prototype.setCategory = function( category_id ){
	// 	// this.category_id = category_id;
	// 	angular.extend(self, category_id);
	// }

	Grocery.prototype.getData = function() {
		this.data = $http.get('/js/json/grocery.json');
	};


	Grocery.prototype.getCategory = function(){

		// console.log( this.data );
		var self = this;

		return this.data.then(function(response) {


			// console.log( response.data );

	        angular.forEach( response.data, function(value, key){

	            if( value.category_id == self.category_id ){


	            	angular.extend(self, value);	
	            	// self.category = value;
	            	// console.log( value );

	            	return response;
	                // callback(value);
	                
	            }

	        });

    	});
	};

	return Grocery;

})


.service('groceryCategory', ['$http', function( $http ){




// var Grocery = function (){
//         this.data = false;

//         this.init = function(){
//             this.getData();
//         }

//         this.getData = function(){
//             this.data = $http.get('/js/api/grocery.json');
//         }

//         this.getCategory = function(callback){

//             this.data.then(function(response) {

//                 angular.forEach( response.data, function(value, key){

//                     if( value.category_id == "3" ){

//                         callback(value);
                        
//                     }

//                 });

//             });
//         }

//         this.getCategories = function(callback){

//             var array = [];
                
//             this.data.then(function(response) {
                
//                 angular.forEach( response.data, function(value, key){

//                     array.push({
//                         "category_id" : value.category_id,
//                         "name"        : value.name
//                     });


//                 });
//                 callback(array);

//             });
//         }

//         this.init();

//     };

//     return (Grocery);
    

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
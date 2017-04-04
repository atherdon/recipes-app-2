angular.module('app.services', [])

.factory('freeRecipes', function( $http ){

	var FreeRecipes = function(){

		this.data        = false;		
		this.getData();
	};

	FreeRecipes.prototype.getData = function() {
		this.data = $http.get('/js/api/json/weeklymenu.json');
	};

	FreeRecipes.prototype.fetch = function(){

		// console.log( this.data );
		var self = this;

		return this.data.then(function(response) {

        
			// console.log( response.data );
        	angular.extend(self, { 'list': response.data.items });
      		return response;
	        

    	});
	};

	return FreeRecipes;

})








.factory('recipe', function( $http ){

	var b = {
		"id" : false, 
		"img" : false,
		"title" : false,
		"weekDay" : false,
		"description" : false,
		"ingredients" : {}
		"directions"  :  {}
	}

	//@TODO check if recipe have all important information if empty()

	var Recipe = function( id ){
		this.data = false;
		this.getData(); 
	}

	Recipe.prototype.getData() = function(){
		this.data = $http.get('/js/api/json/recipe.json');
		// this.data = $http.get('/js/api/json/recipe2.json');
		// this.data = $http.get('/js/api/json/recipe3.json');
		// this.data = $http.get('/js/api/json/recipe4.json');
	}

	Recipe.prototype.fetch() = function(){

		var self = this;

		return this.data.then(function(response) {

	        // angular.forEach( response.data.items, function(value, key){
	    
	        // 	result.week.push( [ value.weekDay.toUpperCase(), value.title ] );
	//         	{
	// 	"id" : false, 
	// 	"img" : false,
	// 	"title" : false,
	// 	"weekDay" : false,
	// 	"description" : false,
	// 	"ingredients" : {}
	// 	"directions"  :  {}
	// }

	        // });
	        // console.log(result);
	        // angular.extend(self, { 'list': response.data.steps });
	        // angular.extend(self, item );
	        
	        return response;

    	});
	}


	


	return Recipe;

})


.factory('recipeDirections', function( $http ){

	var Directions = function( recipe_id ){
		this.data = false;
		this.getData();
	}

	Directions.prototype.getData() = function(){
		this.data = $http.get('/js/api/json/recipe.json');
	}

	Directions.prototype.fetch = function(){
		var self = this;
		
		return this.data.then(function(response) {

	        // angular.forEach( response.data.items, function(value, key){
	    
	        // 	result.week.push( [ value.weekDay.toUpperCase(), value.title ] );
	        	

	        // });
	        // console.log(result);
	        angular.extend(self, { 'list': response.data.directions });
	        return response;

    	});
	}

	return Calendar;

})

.factory('recipeIngredients', function( $http ){

	var Ingredients = function( recipe_id ){
		this.data = false;
		this.getData();
	}

	Ingredients.prototype.getData() = function(){
		this.data = $http.get('/js/api/json/recipe.json');
	}

	Ingredients.prototype.fetch = function(){
		var self = this;
		
		return this.data.then(function(response) {

	        // angular.forEach( response.data.items, function(value, key){
	    
	        // 	result.week.push( [ value.weekDay.toUpperCase(), value.title ] );
	        	

	        // });
	        // console.log(result);
	        angular.extend(self, { 'list': response.data.ingredients });
	        return response;

    	});
	}

	return Ingredients;

})



.factory('Grocery', function($http){

	var Grocery = function ( department_id ){
		this.data          = false;
		this.department_id = department_id;
		// this.category    = false;

		this.getData();
	};


	Grocery.prototype.getData = function() {
		this.data = $http.get('/js/api/json/grocery.json');
	};


	Grocery.prototype.getDepartment = function(){

		// console.log( this.data );
		var self = this;

		return this.data.then(function(response) {


			// console.log( response.data );
      // value.department_id
	        angular.forEach( response.data, function(value, key){

	            if( value.department_id == self.id ){


	            	angular.extend(self, value);	
	            	// self.category = value;
	            	// console.log( value );

	            	return response;
	                // callback(value);
	                
	            }

	        });


    	});
	};

//we use this keys in our templates
// {{department.title}}
// {{department.department_id}}
// {{department.id}}
// {{department.ingredients}}
		
// {{ ing.id }}
// {{ ing.units }} 
// {{ ing.name }}

	Grocery.prototype.fetch = function(){

		var self = this;
		return this.data.then(function(response) {


			// We have a good structured information. 
			// So we can remove unnecessary fields from json file

			angular.extend(self, { 'list': response.data });
			return response;
            // callback(value);



	        // angular.forEach( response.data, function(value, key){

	        //     if( value.department_id == self.id ){


	        //     	angular.extend(self, value);	
	        //     	// self.category = value;
	        //     	// console.log( value );

	        //     	return response;
	        //         // callback(value);
	                
	        //     }

	        // });



		});
	}

	return Grocery;
})

.factory('Calendar', function( $http ){

	var Calendar = function (  ){
		this.data = false;
		// this.category_id = category_id;
		// this.category    = false;

		this.getData();
	};

	Calendar.prototype.getData = function() {
		this.data = $http.get('/js/api/json/weeklymenu.json');
	};

	Calendar.prototype.fetch = function(){

		var self = this;
		var result = { 'week': [] };

		return this.data.then(function(response) {

	        angular.forEach( response.data.items, function(value, key){
	    
	        	result.week.push( [ value.weekDay.toUpperCase(), value.title ] );
	        	

	        });
	        // console.log(result);
	        angular.extend(self, result);
	        return response;

    	});
	}

	return Calendar;

})


.factory('grocerySettings', function($http){

	var Settings = function(){

	}

	//i need recipe title and id

	return Settings;

})


;

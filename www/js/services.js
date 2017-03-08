angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('WeeklyMenu', function( $http ){

	var WeeklyMenu = function (){

		this.data        = false;
		// this.category_id = category_id;
		// this.category    = false;
		
		this.meta        = false;
		this.items       = false;

		this.getData();
		this.fetch();
	};



	WeeklyMenu.prototype.getData = function() {
		this.data = $http.get('/js/json/weekly.json');
		// console.log('123');
	};

	// work only like inner method (don't use it now like promise with then()...)
	WeeklyMenu.prototype.fetch = function(){

		var array = [];
		var self  = this;

		this.data.then(function(response){
			


         	array.push([
        		response.data.meta.id,
        		response.data.meta.title,
        		response.data.meta.description
    		]);

			angular.extend(self, { 'meta': array });

			return response;

		});
	};

	WeeklyMenu.prototype.getItemsForWeeklyMenuPage = function(){

		var array = [];
		
		var self  = this;

		return this.data.then(function(response){
			

			angular.forEach( response.data.items, function(value, key){

            	
	 //        	//get only first weekly menu object
	 // @TODO check if we got empty values
	        	console.log(value.id);
	        	// console.log(value.recipes);



        		array.push( { 
        			"id"     : value.id, 
        			"weekDay": value.weekDay.toUpperCase(), 
        			"title"  : value.title,
        			"img"    : value.img,
        			"recipeDescription": value.recipeDescription 
    			} );

			});

			// console.log( array );
			angular.extend(self, { 'items': array });


			return response;
		});


	};

	//get recipes by weekday id that was passed from weekly menu template
	WeeklyMenu.prototype.getRecipesById = function( id ){



	};	
 
	        	 
	        	 
	        	 
	        	 





	return WeeklyMenu;

})



;
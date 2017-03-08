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

		var array = { meta:[] };
		var self       = this;

		this.data.then(function(response){
			
         	array.meta.push([
        		response.data.meta.id,
        		response.data.meta.title,
        		response.data.meta.description
    		]);

			angular.extend(self, array);

			return response;

		});
	};

	WeeklyMenu.prototype.getItemsForWeeklyMenuPage = function(){

		// var array.items = [];
		var array = { items:[] };
		var self        = this;

		return this.data.then(function(response){
			// console.log(response);

			angular.forEach( response.data.items, function(value, key){

            	
	 //        	//get only first weekly menu object
	 // @TODO check if we got empty values
	        	// console.log( value.weekDay );
	        	// console.log( value.title );
	        	// console.log( value.id );
	        	// console.log( value.img );
	        	// console.log( value.recipeDescription );

	        	// var b = [	        	

	        	// ];	

        		array.items.push( [ 
        			value.id, 
        			value.weekDay.toUpperCase(), 
        			value.title,
        			value.img,
        			value.recipeDescription 
    			] );

			});

			// console.log( array );
			angular.extend(self, array);


			return response;
		});


	};

		

		// angular.forEach( this.data.items, function(value, key){


	        	 
	        	 
	        	 
	        	 
	        	 

	 //        
	        	
	 //        //     	// angular.extend(self, value);	
	 //        //     	// self.category = value;
	 //        //     	// console.log( value );

	 //            	// return response;
	        
	                
  //       }

  //   };

	// 	this.data.then(function(response){
	// 		console.log(response);

	//         angular.forEach( response.data, function(value, key){


	//         	//get only first weekly menu object
	//         	self.weeklyData = value;	
	//         //     // if( value.category_id == self.category_id ){


	//         //     	// angular.extend(self, value);	
	//         //     	// self.category = value;
 //            	console.log( value );

 //            	return response;
	        
	                
	//         //     // }

	//         });


	// 	})

		
	// };



	return WeeklyMenu;

})



;
'use strict';

google.load("feeds", "1");

pravasa
	.controller('MainCtrl', 
		['$scope', '$state', 'cordova', 'feedsService', 'feedsCache',
		function ($scope, $state, cordova, feedsService, feedsCache) {


		cordova.ready.then(function () {
		    console.log('Cordova is ready');
		});

		document.body.scrollTop = 0;
		
		var cacheData = feedsCache.get('list');

		if(cacheData){
			$scope.tripData = cacheData;
		}else{
			feedsService.getFeedData()
				.then(
					function(response) {
						feedsCache.put('list', response);
						$scope.tripData = response;
					},
					function(error) {
						console.log('error', error);
					}			
				);
		}
		

		$scope.onListClick = function(place) {
		   feedsService.setPlaceInfo(place);
		   $state.go('detail');
		};
		
		
	}]);

	

	

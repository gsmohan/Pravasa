'use strict';

pravasa
  .controller('DetailCtrl', 
  	['$scope', '$state', 'feedsService', 
  	function ($scope, $state, feedsService) {

  		document.body.scrollTop = 0;

		$scope.place = feedsService.getPlaceInfo();

		$scope.goBack = function(){
			$state.go('home');
		};
	}]);

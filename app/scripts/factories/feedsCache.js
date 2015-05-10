'use strict';

pravasa
	.factory('feedsCache', [ '$cacheFactory', function($cacheFactory) {
		var cachedData = $cacheFactory('list');
		return cachedData;
	}]);
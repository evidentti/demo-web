'use strict';

angular.module('main.controller', [])

.controller('mainController', function($scope) {
	console.log('mainController', 'construct');
	
	
	$scope.$on('$destroy', function() {
		console.log('mainController', 'destroy');
	});
});
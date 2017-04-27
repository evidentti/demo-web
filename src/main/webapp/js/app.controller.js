'use strict';

angular.module('app.controllers', ['main.controller'])

.controller('appController', function($scope) {
	console.log('appController', 'construct');
	
	$scope.$on('$destroy', function() {
		console.log('appController', 'destroy');
	});
});
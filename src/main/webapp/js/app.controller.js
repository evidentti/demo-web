angular.module('app.controllers', [])

.controller('appController', function($scope) {
	console.log('appController', 'construct');
	
	$scope.$on('$destroy', function() {
		console.log('appController', 'destruct');
	});
});
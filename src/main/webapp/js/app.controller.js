angular.module('app.controllers', ['main.controller', 'details.controller', 'filter.controller'])

.controller('appController', function($rootScope, $scope) {
	console.log('appController', $rootScope.created);
	
	$scope.$on('$destroy', function() {
		console.log('appController', $rootScope.destroyed);
	});
});
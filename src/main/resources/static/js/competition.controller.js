'use strict';

angular.module('competition.controller', [])

.controller('competitionController', function($rootScope, $scope, $state, $http) {
	console.log('competitionController', $rootScope.created);
	
	var self = this;
	self.competition = null;
	
	self.getCompetition = function() {
		
		$http.get('competition.json').then(function(response) {
				console.debug('SUCCESS', response.data);
				self.competition = response.data;
			}, function(error) {
				console.error('ERROR');
				self.competition = null;
			});
	};
	
	$scope.$on('$destroy', function() {
		console.log('competitionController', $rootScope.destroyed);
	});
});
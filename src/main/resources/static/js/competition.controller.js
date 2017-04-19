'use strict';

angular.module('competition.controller', [])

.controller('competitionController', function($rootScope, $scope, $state, AppService, $mdToast) {
	console.log('competitionController', $rootScope.created);
	
	var self = this;
	
	self.loadingIssues = false;
	self.issues = null;
	self.offset = null;
	self.total = null;
	self.more = null;
	
	self.getIssues = function(next) {
		AppService.getIssues().then(function (response) {
			console.debug('competitionController.getIssues', response);
			if(next) {
				var newIssues = angular.isArray(response.objects) ? response.objects : [];
				self.issues.push.apply(self.issues, newIssues);
			}
			else {
				self.issues = angular.isArray(response.objects) ? response.objects : [];
			}
			self.offset = response.offset;
			self.total = response.total;
        }, function (error) {
        	console.error('competitionController.getIssues', error);
        }, function(notification) {
        	console.debug('competitionController.getIssues: notify', notification);
        	self.loadingIssues = true;
        }).finally(function () {
        	console.debug('competitionController.getIssues: finally');
        	self.loadingIssues = false;
        	var text;
        	if(angular.isArray(self.issues)) {
        		var count = self.issues.length;
        		text = 'Haettu: ' + count + ', ';
        		self.more = self.total > count;
        	}
        	text = text + 'Yhteensä: ' + self.total;
         	$rootScope.showToast(text);
        });
	};
	
	self.openIssue = function(issue) {
		console.log('competitionController.openIssue', issue);
		if(angular.isObject(issue)) {

		}
	};
	
	$scope.$on('$destroy', function() {
		console.log('competitionController', $rootScope.destroyed);
	});
});
angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	self.loadingIssues = false;
	self.issues = null;
	self.offset = null;
	self.total = null;
	self.more = null;
	
	self.getIssues = function(next) {
		AppService.getIssues(next).then(function (response) {
			console.debug('mainController.getIssues', response);
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
        	console.error('mainController.getIssues', error);
        }, function(notification) {
        	console.debug('mainController.getIssues: notify', notification);
        	self.loadingIssues = true;
        }).finally(function () {
        	console.debug('mainController.getIssues: finally');
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
		console.log('mainController.openIssue', issue);
		if(angular.isObject(issue)) {

		}
	};
	
	self.getIssuesByCategory = function(category) {
		console.log('mainController.getIssuesByCategory', category);
		if(angular.isObject(category)) {
			self.issues = null;
			self.getIssues();
		}
	};
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});
angular.module('filter.controller', [])

.controller('filterController', function($rootScope, $scope, $state, AppService) {
	console.log('filterController', $rootScope.created);
	
	var self = this;
	
	self.loadingCategories = false;
	self.categories = null;
	self.selectedCategory = null;
	self.selectedCategory2 = null;
	self.limit = null;

	function createFilterFor(category) {
		return function filterFn(field) {
			return (angular.lowercase(field.name).indexOf(angular.lowercase(category)) === 0);
		};
	}
	
	self.getCategories = function(params) {
		AppService.getCategories(params).then(function (response) {
			console.debug('mainController.getCategories', response);
			self.categories = angular.isArray(response.objects) ? response.objects : [];
        }, function (error) {
        	console.error('mainController.getCategories', error);
        }, function(notification) {
        	console.debug('mainController.getCategories: notify', notification);
        	self.loadingCategories = true;
        }).finally(function () {
        	console.debug('mainController.getCategories: finally');
        	self.loadingCategories = false;
        });
	}
	
	self.categoryChanged = function(category) {
		console.log('filterController.categoryChanged', category);
		if(angular.isObject(category)) {
			AppService.setCategory(category.id);
		}
		else {
			AppService.setCategory();
		}
	};

	self.querySearch = function(query) {
		return query ? self.categories.filter( createFilterFor(query) ) : self.categories;
	};
	
	self.getIssueParams = function() {
		var issueParams = AppService.getIssueParams();
		self.limit = angular.isObject(issueParams) ? issueParams.limit : null;
	};
	
	self.setLimit = function(limit) {
		AppService.setLimit(limit);
	};
	
	self.getCategories();
	self.getIssueParams();
	
	$scope.$on('$destroy', function() {
		console.log('filterController', $rootScope.destroyed);
	});
});
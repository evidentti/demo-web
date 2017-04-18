angular.module('app.service', ['ngResource'])
.factory('IssueResource', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/issue/', {}, {
		get: {
			method: 'GET',
			cache: false
		}
	});
}])
.factory('CategoryResource', ['$resource', function ($resource) {
	return $resource('https://dev.hel.fi:443/paatokset/v1/category/', {}, {
		get: {
			method: 'GET',
			cache: false
		}
	});
}])
.service('AppService', ['CategoryResource', 'IssueResource', '$q', '$timeout', function (CategoryResource, IssueResource, $q, $timeout) {
	
	var self = this;
	var objects = null;
	var offset = 0;
	
	var parameters = null;
	
	function issueParams() {
		if(!angular.isObject(parameters)) {
			parameters = {'category': null, 'limit': null, 'offset': 0};
		}
		else {
			parameters.offset = offset; // angular.isArray(objects) ? objects.length : 0;
		}
		return parameters;
	}
	
	self.getIssueParams = function() {
		var params = issueParams();
		return angular.copy(params);
	};
	
	self.setLimit = function(limit) {
		var params = issueParams();
		params.limit = limit ? limit : 20;
		parameters = params;
	};
	
	self.setCategory = function(category) {
		var params = issueParams();
		params.category = category ? category : null;
		parameters = params;
	};
	
	self.getCategories = function(params) {
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	CategoryResource.get(params).$promise.then(function (response) {
        		deferred.resolve(response);
            }, function (error) {
            	deferred.reject(error);
            });     
        }, 0);

        return deferred.promise;
	};
	
	self.getIssues = function(next) {
		if(next !== true) {
			objects = null;
			offset = 0;
		}
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	IssueResource.get(issueParams()).$promise.then(function (response) {
        		offset = offset + response.objects.length;
        		deferred.resolve({ 'objects': response.objects, 'offset': offset, 'total': response.meta.total_count });
        	}, function (error) {
        		deferred.reject(error);
        	});
        }, 0);

        return deferred.promise;
	};
	
}]);

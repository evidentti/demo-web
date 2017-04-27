'use strict';

angular.module('app.service', [])
.service('AppService', ['$q', '$timeout', function ($q, $timeout) {
	
	var self = this;
	
	self.testing = function() {
		var deferred = $q.defer();
        $timeout(function () {
        	deferred.notify('started');
        	$timeout(function () {
        		deferred.resolve('ready');
         
            }, 3000);
        }, 0);

        return deferred.promise;
	};

}]);

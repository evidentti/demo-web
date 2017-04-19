'use strict';

angular.module('competition.directive', [])
.directive('cpDir', function() {
    return {
        scope: {
        	operation: '=operation'
        },
        restrict: 	'E',
        template: 	'<div>'
        		+	'<p>{{operation.variableName}}</p>'
        		+	'<p>{{operation.type}}</p>'
        		+	'</div>',
        replace: 	'true',
        controller: function($scope, $rootScope) {
        	$scope.id = $rootScope.getId();
        	console.log('cpDir', $scope.id, $rootScope.created, ': operation = ', $scope.operation);
        	
        	$scope.$watch('operation', function (newValue, oldValue, scope) {
        		if(!angular.equals(newValue, oldValue)) {
        			console.debug('cpDir', $scope.id, ': operation =>', newValue.id);
        		}
        	}, true);
        	
        	$scope.$on('$destroy', function () {
        		console.log('cpDir', $scope.id, $rootScope.destroyed);
            });
        }
    };
});
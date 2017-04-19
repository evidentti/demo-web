'use strict';

angular.module('set.variable.rule.operation.directive', [])
.directive('svroDir', function() {
    return {
        scope: {
        	variableValue: '=variableValue'
        },
        restrict:		'E',
        templateUrl:	'views/set.variable.rule.operation.html',
        replace: 		'true',
        controller: function($scope, $rootScope) {
        	$scope.id = $rootScope.getId();
//        	console.log('svroDir', $scope.id, 'CREATED', $scope.variableValue);
        	
        	$scope.$on('$destroy', function () {
        		console.log('svroDir', $scope.id, 'DESTROYED');
            });
        }
    };
});
'use strict';

angular.module('operand.directive', [])
.directive('opdDir', function() {
    return {
        scope: {
        	operand: '=operand'
        },
        restrict:		'E',
        templateUrl:	'views/operand.html',
        replace: 		'true',
        controller: function($scope, $rootScope) {
        	$scope.id = $rootScope.getId();
        	console.log('opdDir', $scope.id, 'CREATED', $scope.operand);
        	
        	$scope.$on('$destroy', function () {
        		console.log('opdDir', $scope.id, 'DESTROYED');
            });
        }
    };
});
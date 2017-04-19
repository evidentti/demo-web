'use strict';

angular.module('data.directive', [])
.directive('dtDir', function() {
    return {
        scope: {
        	issue: '=issue'
        },
        restrict: 	'E',
        template: 	'<div>'
        		+	'<h3>{{issue.top_category_name}}</h3>'
        		+	'<h4>{{issue.category_name}}</h4>'
        		+	'<div layout="row" layout-align="none none">'
        		+	'<p md-truncate flex>{{issue.subject}}</p>'
        		+	'<i>muokattu {{issue.last_modified_time | date : format : timezone}}</i>'
        		+	'</div>'
        		+	'</div>',
        replace: 	'true',
        controller: function($scope, $rootScope) {
        	$scope.id = $rootScope.getId();
        	console.log('dtDir', $scope.id, $rootScope.created);
        	
        	$scope.$watch('issue', function (newValue, oldValue, scope) {
        		if(!angular.equals(newValue, oldValue)) {
        			console.debug('dtDir', $scope.id, ': issue changed =>', newValue.id);
        		}
        	}, true);
        	
        	$scope.$on('$destroy', function () {
        		console.log('dtDir', $scope.id, $rootScope.destroyed);
            });
        }
    };
});
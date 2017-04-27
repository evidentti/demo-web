'use strict';

angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
    .state("main", {
        url: '/main',
        views: {
            'appView': {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                controllerAs: 'ctrl'
            }
        }
    });
	
	$urlRouterProvider.otherwise('/main');
	
}]);
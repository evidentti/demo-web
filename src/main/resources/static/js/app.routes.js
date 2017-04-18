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
            },
            'menuView': {
                templateUrl: 'views/filter.html',
                controller: 'filterController',
                controllerAs: 'ctrl'
            }
        }
    })
    .state("details", {
        url: '/details',
        views: {
            'appView': {
                templateUrl: 'views/details.html',
                controller: 'detailsController',
                controllerAs: 'ctrl'
            },
            'menuView': {
                templateUrl: 'views/filter.html',
                controller: 'filterController',
                controllerAs: 'ctrl'
            }
        }
    });
	
	$urlRouterProvider.otherwise('/main');
	
}]);
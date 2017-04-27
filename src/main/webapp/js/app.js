'use strict';

angular.module("demoWebApp", ['ui.router', 'app.service', 'app.controllers', 'app.routes', 'ngMaterial', 'ngMdIcons', 'ngMessages'])

.config(function() {

})

.run(function($rootScope, $state) {
	console.log('demoWebApp', 'RUN');
	
	$rootScope.goState = function(st) {
		console.log('goState', st);
		if(angular.isString(st)) {
			$state.go(st);
		}
		else {
			$state.go('main');
		}
	};
	
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        console.log('app.stateChangeStart:', toState);
    });
	
	$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.log('app.stateNotFound:', unfoundState);
    });
	
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('app.stateChangeSuccess:', toState);
    });
	
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('app.stateChangeError:', toState, error);
    });
});

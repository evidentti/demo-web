'use strict';

angular.module("demoWebApp", ['ui.router', 'app.service', 'app.controllers', 'app.routes', 'data.directive',
	'competition.directive', 'set.variable.rule.operation.directive', 'ngMaterial', 'ngMdIcons', 'ngMessages'])

.config(function() {

})

.run(function($rootScope, $state, $mdToast) {
	console.log('demoWebApp', 'RUN');
	
	$rootScope.created = 'CREATED';
	$rootScope.destroyed = 'DESTROYED';
	$rootScope.appName = 'DEMO APP';
	$rootScope.menuOpen = true;
	var id;
	
	$rootScope.goState = function(st) {
		console.log('goState', st);
		if(angular.isString(st)) {
			$state.go(st);
		}
		else {
			$state.go('main');
		}
	};
	
	$rootScope.getId = function() {
		if(!id) {
			id = 10000;
		}
		return id++;
	}
	
	$rootScope.showToast = function(text, position) {
		if(!angular.isString(position)) {
			position = 'top right';
		}
		$mdToast.show($mdToast.simple().textContent(text).position(position).hideDelay(3000));
	};
	
	$rootScope.toggleMenu = function() {
		$rootScope.menuOpen = $rootScope.menuOpen ? false : true;
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
	
//	$rootScope.$on('$viewContentLoading', function(event, viewConfig){ 
//		console.log('app.viewContentLoading:', viewConfig);
//	});
//	
//	$rootScope.$on('$viewContentLoaded', function(event, viewConfig){ 
//		console.log('app.viewContentLoaded:', viewConfig);
//	});
});

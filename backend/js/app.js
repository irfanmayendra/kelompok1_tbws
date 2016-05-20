(function (window, document, $, angular) {
	'use strict';

	var app = angular.module('App', [
		'ng',
		'ngRoute',
		'ngResource',
		'App.controllers',
		'App.directives',
		'App.routes',
		'App.services',
    	'App.filters',
		'ngSanitize',
		'ui.router',
		'ui.bootstrap',
		'oc.lazyLoad',
		'angularFileUpload'
	]);

	// Run
	app.run(function ($rootScope, $route, applicationName) {

		$rootScope.applicationName = applicationName;

		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = $route.current.title;
		});

	});

})(window, document, jQuery, angular);
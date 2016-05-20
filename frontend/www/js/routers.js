var app = angular.module('App.routers', [])

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'views/partials/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/home.html',
				controller: 'HomeCtrl'
			}
		}
	})

})
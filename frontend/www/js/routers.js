var app = angular.module('App.routers', [])

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'views/partials/menu.html',
		controller: 'AppCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl: 'views/pages/login.html',
		controller: 'LoginCtrl'
	})
	
	$urlRouterProvider.otherwise('/login');
})
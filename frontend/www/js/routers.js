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

	.state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/home.html',
				controller: 'HomeCtrl'
			}
		}
	})

	.state('app.profile', {
		url: '/profile',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/profile.html',
				controller: 'ProfileCtrl'
			}
		}
	})

	.state('app.updateprofile', {
		url: '/profile/updateprofile',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/updateprofile.html',
				controller: 'UpdateProfileCtrl'
			}
		}
	})
})
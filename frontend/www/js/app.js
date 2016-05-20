var app = angular.module('App', [
	'ionic',
	'ngMockE2E',
	'App.routers',
	'App.services',
	'App.constants',
	'App.controllers'
])

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

app.run(function ($httpBackend) {
	// Don't mock the html views
	$httpBackend.whenGET(/views\/\w+.*/).passThrough();

	// For everything else, don't mock
	$httpBackend.whenGET(/^\w+.*/).passThrough();
	$httpBackend.whenPOST(/^\w+.*/).passThrough();
})

app.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
	$rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {

		if ('data' in next && 'authorizedRoles' in next.data) {
			var authorizedRoles = next.data.authorizedRoles;
			if (!AuthService.isAuthorized(authorizedRoles)) {
				event.preventDefault();
				$state.go($state.current, {}, {
					reload: true
				});
				$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
			}
		}

		if (!AuthService.isAuthenticated()) {
			if (next.name !== 'login') {
				event.preventDefault();
				$state.go('login');
			}
		}
	});
})
app.directive("initFromForm", function ($parse) {
    return {
        link: function (scope, element, attrs) {
            var attr = attrs.initFromForm || attrs.ngModel || element.attrs('name'),
            val = attrs.value;
            $parse(attr).assign(scope, val);
        }
    };
})

app.directive('integer', function(){
    return {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseInt(viewValue, 10);
            });
        }
    };
});
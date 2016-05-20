var app = angular.module('App.services', [])

app.factory('kategoriService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/kategori/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_kategori.php');
		},
	};
})
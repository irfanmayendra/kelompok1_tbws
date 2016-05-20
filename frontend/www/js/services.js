var app = angular.module('App.services', [])

app.factory('kategoriService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/kategori/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_kategori.php');
		},
        getIdcustomer: function () {
			return $http.get(baseUrl + 'select_id_customer.php?customer_username=' + AuthService.username());
		},

		updatecustomer: function (data) {
			return $http.post(baseUrl + 'update_customer.php', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			});
		}
	};
})
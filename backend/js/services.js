'use strict';

// Services

var app = angular.module('App.services', []);

// Set values for use in page title

app.value('applicationName', 'Ali Abdul Wahid');
app.value('separator', ' - ');


app.factory('kategoriService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/kategori/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_kategori.php');
		},
		getId: function (kategoriId) {
			return $http.get(baseUrl + 'select_id_kategori.php?kategori_id=' + kategoriId);
		},
		createkategori: function (kategori) {
			return $http.post(baseUrl + 'insert_kategori.php', kategori, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			});
		},
		updatekategori: function (data) {
			return $http.post(baseUrl + 'update_kategori.php', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			});
		},
		deletekategori: function (kategori_id) {
			return $http.get(baseUrl + 'delete_kategori.php?kategori_id=' + kategori_id);
		}
	};
})

app.factory('produkService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/produk/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_produk.php');
		},
		getId: function (produkId) {
			return $http.get(baseUrl + 'select_id_produk.php?produk_id=' + produkId);
		},
		createproduk: function (produk) {
			return $http.post(baseUrl + 'insert_produk.php', produk, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			});
		},
		updateproduk: function (data) {
			return $http.post(baseUrl + 'update_produk.php', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			});
		},
		deleteproduk: function (produk_id) {
			return $http.get(baseUrl + 'delete_produk.php?produk_id=' + produk_id);
		}
	};
})

app.factory('tokoService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/toko/';
	return {
		getId: function (tokoId) {
			return $http.get(baseUrl + 'select_id_toko.php?toko_id=' + tokoId);
		},
		updatetoko: function (data) {
			return $http.post(baseUrl + 'update_toko.php', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			});
		},
	};
})

app.factory('userService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/user/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_user.php');
		},
		getId: function (userId) {
			return $http.get(baseUrl + 'select_id_user.php?user_id=' + userId);
		},
		deleteuser: function (userId) {
			return $http.get(baseUrl + 'delete_user.php?user_id=' + userId);
		}
	};
})

app.factory('pembelianService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/pembelian/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_all_pembelian.php');
		},
		getId: function (pembelianId) {
			return $http.get(baseUrl + 'select_id_pembelian.php?pembelian_id=' + pembelianId);
		},
	};
})

app.factory('customerService', function ($http) {
	var baseUrl = 'http://localhost/webservice/server/customer/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'select_customer.php');
		},
		getId: function (customerId) {
			return $http.get(baseUrl + 'select_id_customer.php?customer_username=' + customerId);
		},
	};
})
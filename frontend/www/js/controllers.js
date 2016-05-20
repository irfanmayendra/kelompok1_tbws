var app = angular.module('App.controllers', [])



app.controller('HomeCtrl', function ($scope, $state, kategoriService) {
	$scope.title = "Toko Online";

	$scope.showData = function () {
		kategoriService.getAll().success(function (data) {
			$scope.kategori = data;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.reload = function () {
		$state.go('app.home');
	};
})
app.controller('ProfileCtrl', function ($scope) {
	$scope.title = "Profile";
})

app.controller('UpdateProfileCtrl', function ($scope, $state, $window, customerService) {
	$scope.title = "Ubah Profile";

	$scope.edit = function (customer_username, customer_nama, customer_alamat, customer_email, customer_notel, customer_asal) {
		$scope.customer_username = customer_username;
		$scope.customer_nama = customer_nama;
		$scope.customer_alamat = customer_alamat;
		$scope.customer_email = customer_email;
		$scope.customer_notel = customer_notel;
		$scope.customer_asal = customer_asal;
		customerService.updatecustomer({
			'customer_username': customer_username,
			'customer_nama': customer_nama,
			'customer_alamat': customer_alamat,
			'customer_email': customer_email,
			'customer_notel': customer_notel,
			'customer_asal': customer_asal,
		}).then(function (resp) {
			console.log('Success', resp);

			$window.location.reload(true);
			$state.go('app.profile');
		}, function (err) {
			console.error('Error', err);
		});
	}
})

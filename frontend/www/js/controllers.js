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
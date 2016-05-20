'use strict';

// Controllers
var app = angular.module('App.controllers', []);

app.controller('AppController', function ($scope, $window, applicationName) {
	$scope.menu = [
		{
			name: "Home",
			href: "#/home",
			icon: "fa fa-home"
        },
		{
			name: "Toko",
			href: "#/toko/1",
			icon: "fa fa-building"
        },
		{
			name: "Kategori Produk",
			href: "#/kategori",
			icon: "fa fa-shopping-basket"
        },
		{
			name: "Produk",
			href: "#/produk",
			icon: "fa fa-shopping-bag"
        },
		{
			name: "User",
			href: "#/user",
			icon: "fa fa-users"
        },
		{
			name: "Pembelian",
			href: "#/pembelian",
			icon: "fa fa-shopping-cart"
        },
		{
			name: "Customer",
			href: "#/customer",
			icon: "fa fa-child"
        },
    ]

	$scope.index = 0;

	$scope.setIndex = function (val) {
		$scope.index = val;
	}

	$scope.getIndex = function () {
		return ($scope.index);
	}

	$scope.goBack = function () {
		$window.history.back();
	};

	$scope.applicationName = applicationName;

	$scope.no = Array;
})

app.controller('AngularUIController', ['$scope', 'resource', function ($scope, $location, resource) {
	$scope.model = resource.data;
}]);

app.controller('IndexController', function ($scope) {
	$scope.pagetitle = "Dashboard";
	$scope.pagetitledesc = "Informasi Halaman Awal";
	$scope.color = "gray";
})

app.controller('KategoriController', function ($scope, $location, $timeout, kategoriService) {
	$scope.pagetitle = "Kategori Produk";
	$scope.pagetitledesc = "Informasi Mengenai Kategori Produk";
	$scope.color = "green";

	$scope.showData = function () {
		kategoriService.getAll().success(function (data) {
			$scope.kategori = data;
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "5"; //max no of items to display in a page
			$scope.filteredItems = $scope.kategori.length; //Initially for no filter  
			$scope.totalItems = $scope.kategori.length;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.sort_by = function (predicate) {
		$scope.predicate = predicate;
		$scope.reverse = !$scope.reverse;
	};

	$scope.reload = function () {
		$location.path('/kategori');
	};

	$scope.delete = function (data) {
		kategoriService.deletekategori(data.kategori_id);
		$scope.kategori.splice($scope.kategori.indexOf(data), 1);
	};
});

app.controller('DetailKategoriController', function ($scope, $location, $routeParams, kategoriService) {
	$scope.pagetitle = "Kategori Produk";
	$scope.pagetitledesc = "Informasi Mengenai Kategori Produk";
	$scope.color = "green";
	$scope.action = "Detail";

	$scope.showDataId = function () {
		kategoriService.getId($routeParams.kategoriId).success(function (data) {
			$scope.kategori = data;
		});
	};
	$scope.showDataId();

	$scope.delete = function (data) {
		kategoriService.deletekategori(data.kategori_id);
		$location.path('/kategori');
	};
})

app.controller('AddKategoriController', function ($scope, $location, kategoriService) {
	$scope.pagetitle = "Kategori Produk";
	$scope.pagetitledesc = "Informasi Mengenai Kategori Produk";
	$scope.color = "green";
	$scope.action = "Add";

	$scope.kategori = {};
	$scope.simpan = function () {
		kategoriService.createkategori({
			kategori_nama: $scope.kategori.kategori_nama,
			kategori_icon: $scope.kategori.kategori_icon,
			kategori_color: $scope.kategori.kategori_color,
		}).success(function (data) {
			$location.path('/kategori');
		});
	}
});

app.controller('UpdKategoriController', function ($scope, $location, $routeParams, kategoriService) {
	$scope.pagetitle = "Kategori Produk";
	$scope.pagetitledesc = "Informasi Mengenai Kategori Produk";
	$scope.color = "green";
	$scope.action = "Update";

	$scope.showDataId = function () {
		kategoriService.getId($routeParams.kategoriId).success(function (data) {
			$scope.kategori = data;
		});
	};
	$scope.showDataId();

	$scope.edit = function (kategori_id, kategori_nama, kategori_icon, kategori_color) {
		$scope.kategori_id = kategori_id;
		$scope.kategori_nama = kategori_nama;
		$scope.kategori_icon = kategori_icon;
		$scope.kategori_color = kategori_color;
		kategoriService.updatekategori({
			'kategori_id': kategori_id,
			'kategori_nama': kategori_nama,
			'kategori_icon': kategori_icon,
			'kategori_color': kategori_color,
		}).then(function (resp) {
			console.log('Success', resp);
			$location.path('/kategori');
		}, function (err) {
			console.error('Error', err);
		});
	}
})

app.controller('ProdukController', function ($scope, $location, $timeout, produkService) {
	$scope.pagetitle = "Produk";
	$scope.pagetitledesc = "Informasi Mengenai Produk";
	$scope.color = "green";

	$scope.showData = function () {
		produkService.getAll().success(function (data) {
			$scope.produk = data;
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "5"; //max no of items to display in a page
			$scope.filteredItems = $scope.produk.length; //Initially for no filter  
			$scope.totalItems = $scope.produk.length;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.sort_by = function (predicate) {
		$scope.predicate = predicate;
		$scope.reverse = !$scope.reverse;
	};

	$scope.reload = function () {
		$location.path('/kategori');
	};

	$scope.delete = function (data) {
		produkService.deleteproduk(data.produk_id);
		$scope.produk.splice($scope.produk.indexOf(data), 1);
	};
});

app.controller('DetailProdukController', function ($scope, $location, $routeParams, produkService) {
	$scope.pagetitle = "Produk";
	$scope.pagetitledesc = "Informasi Mengenai Produk";
	$scope.color = "green";
	$scope.action = "Detail";

	$scope.showDataId = function () {
		produkService.getId($routeParams.produkId).success(function (data) {
			$scope.produk = data;
		});
	};
	$scope.showDataId();

	$scope.delete = function (data) {
		produkService.deleteproduk(data.produk_id);
		$location.path('/produk');
	};
})

app.controller('AddProdukController', function ($scope, FileUploader, $location, kategoriService, produkService) {
	$scope.pagetitle = "Produk";
	$scope.pagetitledesc = "Informasi Mengenai Produk";
	$scope.color = "green";
	$scope.action = "Add";

	var uploader = $scope.uploader = new FileUploader({
		url: 'http://localhost/kelompok1/frontend/www/img/upload_produk.php'
	});

	uploader.filters.push({
		name: 'customFilter',
		fn: function (item /*{File|FileLikeObject}*/ , options) {
			return this.queue.length < 1;
		}
	});

	// CALLBACKS
	uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/ , filter, options) {
		console.info('onWhenAddingFileFailed', item, filter, options);
	};
	uploader.onAfterAddingFile = function (fileItem) {
		console.info('onAfterAddingFile', fileItem);
	};
	uploader.onAfterAddingAll = function (addedFileItems) {
		console.info('onAfterAddingAll', addedFileItems);
	};
	uploader.onBeforeUploadItem = function (item) {
		console.info('onBeforeUploadItem', item);
	};
	uploader.onProgressItem = function (fileItem, progress) {
		console.info('onProgressItem', fileItem, progress);
	};
	uploader.onProgressAll = function (progress) {
		console.info('onProgressAll', progress);
	};
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		console.info('onSuccessItem', fileItem, response, status, headers);
	};
	uploader.onErrorItem = function (fileItem, response, status, headers) {
		console.info('onErrorItem', fileItem, response, status, headers);
	};
	uploader.onCancelItem = function (fileItem, response, status, headers) {
		console.info('onCancelItem', fileItem, response, status, headers);
	};
	uploader.onCompleteItem = function (fileItem, response, status, headers) {
		console.info('onCompleteItem', fileItem, response, status, headers);
	};
	uploader.onCompleteAll = function () {
		console.info('onCompleteAll');
	};

	console.info('uploader', uploader);


	$scope.showData = function () {
		kategoriService.getAll().success(function (data) {
			$scope.kategori = data;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.produk = {};
	$scope.simpan = function () {
		produkService.createproduk({
			kategori_id: $scope.produk.kategori_id,
			produk_nama: $scope.produk.produk_nama,
			produk_deskripsi: $scope.produk.produk_deskripsi,
			produk_harga: $scope.produk.produk_harga,
			produk_terjual: $scope.produk.produk_terjual,
			produk_pesan_min: $scope.produk.produk_pesan_min,
			produk_kondisi: $scope.produk.produk_kondisi,
			produk_stock: $scope.produk.produk_stock,
			produk_gambar: $scope.produk.produk_gambar,
		}).success(function (data) {
			$location.path('/produk');
		});
	}
});

app.controller('UpdProdukController', function ($scope, $location, $routeParams, FileUploader, kategoriService, produkService) {
	$scope.pagetitle = "Produk";
	$scope.pagetitledesc = "Informasi Mengenai Produk";
	$scope.color = "green";
	$scope.action = "Update";

	var uploader = $scope.uploader = new FileUploader({
		url: 'http://localhost/kelompok1/frontend/www/img/upload_produk.php'
	});

	uploader.filters.push({
		name: 'customFilter',
		fn: function (item /*{File|FileLikeObject}*/ , options) {
			return this.queue.length < 1;
		}
	});

	// CALLBACKS
	uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/ , filter, options) {
		console.info('onWhenAddingFileFailed', item, filter, options);
	};
	uploader.onAfterAddingFile = function (fileItem) {
		console.info('onAfterAddingFile', fileItem);
	};
	uploader.onAfterAddingAll = function (addedFileItems) {
		console.info('onAfterAddingAll', addedFileItems);
	};
	uploader.onBeforeUploadItem = function (item) {
		console.info('onBeforeUploadItem', item);
	};
	uploader.onProgressItem = function (fileItem, progress) {
		console.info('onProgressItem', fileItem, progress);
	};
	uploader.onProgressAll = function (progress) {
		console.info('onProgressAll', progress);
	};
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		console.info('onSuccessItem', fileItem, response, status, headers);
	};
	uploader.onErrorItem = function (fileItem, response, status, headers) {
		console.info('onErrorItem', fileItem, response, status, headers);
	};
	uploader.onCancelItem = function (fileItem, response, status, headers) {
		console.info('onCancelItem', fileItem, response, status, headers);
	};
	uploader.onCompleteItem = function (fileItem, response, status, headers) {
		console.info('onCompleteItem', fileItem, response, status, headers);
	};
	uploader.onCompleteAll = function () {
		console.info('onCompleteAll');
	};

	console.info('uploader', uploader);

	$scope.showDataId = function () {
		produkService.getId($routeParams.produkId).success(function (data) {
			$scope.produk = data;

		});
	};
	$scope.showDataId();

	$scope.showData = function () {
		kategoriService.getAll().success(function (data) {
			$scope.kategori = data;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();


	$scope.edit = function (produk_id, produk_nama, produk_deskripsi, produk_harga, produk_terjual, produk_pesan_min, produk_stock, produk_kondisi, produk_gambar, kategori_id) {
		$scope.produk_id = produk_id;
		$scope.produk_nama = produk_nama;
		$scope.produk_deskripsi = produk_deskripsi;
		$scope.produk_harga = produk_harga;
		$scope.produk_terjual = produk_terjual;
		$scope.produk_pesan_min = produk_pesan_min;
		$scope.produk_stock = produk_stock;
		$scope.produk_kondisi = produk_kondisi;
		$scope.produk.produk_gambar = produk_gambar;
		$scope.kategori_id = kategori_id;
		produkService.updateproduk({
			'produk_id': produk_id,
			'produk_nama': produk_nama,
			'produk_deskripsi': produk_deskripsi,
			'produk_harga': produk_harga,
			'produk_terjual': produk_terjual,
			'produk_pesan_min': produk_pesan_min,
			'produk_stock': produk_stock,
			'produk_kondisi': produk_kondisi,
			'produk_gambar': produk_gambar,
			'kategori_id': kategori_id,
		}).then(function (resp) {
			console.log('Success', resp);
			$location.path('/produk');
		}, function (err) {
			console.error('Error', err);
		});
	}
})

app.controller('UpdTokoController', function ($scope, $location, $routeParams, tokoService) {
	$scope.pagetitle = "Toko";
	$scope.pagetitledesc = "Informasi Mengenai Toko";
	$scope.color = "green";
	$scope.action = "Update";

	$scope.showDataId = function () {
		tokoService.getId($routeParams.tokoId).success(function (data) {
			$scope.toko = data;
		});
	};
	$scope.showDataId();

	$scope.edit = function (toko_id, toko_nama, toko_alamat) {
		$scope.toko_id = toko_id;
		$scope.toko_nama = toko_nama;
		$scope.toko_alamat = toko_alamat;
		tokoService.updatetoko({
			'toko_id': toko_id,
			'toko_nama': toko_nama,
			'toko_alamat': toko_alamat,
		}).then(function (resp) {
			console.log('Success', resp);
			$location.path('/toko/1');
		}, function (err) {
			console.error('Error', err);
		});
	}
})

app.controller('UserController', function ($scope, $location, $timeout, userService) {
	$scope.pagetitle = "User";
	$scope.pagetitledesc = "Informasi Mengenai User";
	$scope.color = "green";

	$scope.showData = function () {
		userService.getAll().success(function (data) {
			$scope.user = data;
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "5"; //max no of items to display in a page
			$scope.filteredItems = $scope.user.length; //Initially for no filter  
			$scope.totalItems = $scope.user.length;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.sort_by = function (predicate) {
		$scope.predicate = predicate;
		$scope.reverse = !$scope.reverse;
	};

	$scope.reload = function () {
		$location.path('/user');
	};

	$scope.delete = function (data) {
		userService.deleteuser(data.user_id);
		$scope.user.splice($scope.user.indexOf(data), 1);
	};
});


app.controller('DetailUserController', function ($scope, $location, $routeParams, userService) {
	$scope.pagetitle = "User";
	$scope.pagetitledesc = "Informasi Mengenai User";
	$scope.color = "green";
	$scope.action = "Detail";

	$scope.showDataId = function () {
		userService.getId($routeParams.userId).success(function (data) {
			$scope.user = data;
		});
	};
	$scope.showDataId();

	$scope.delete = function (data) {
		userService.deleteuser(data.user_id);
		$location.path('/produk');
	};
})

app.controller('PembelianController', function ($scope, $location, $timeout, pembelianService) {
	$scope.pagetitle = "Report Pembelian";
	$scope.pagetitledesc = "Informasi Mengenai Report Pembelian";
	$scope.color = "green";

	$scope.showData = function () {
		pembelianService.getAll().success(function (data) {
			$scope.pembelian = data;
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "5"; //max no of items to display in a page
			$scope.filteredItems = $scope.pembelian.length; //Initially for no filter  
			$scope.totalItems = $scope.pembelian.length;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.sort_by = function (predicate) {
		$scope.predicate = predicate;
		$scope.reverse = !$scope.reverse;
	};

	$scope.reload = function () {
		$location.path('/pembelian');
	};

});

app.controller('DetailPembelianController', function ($scope, $location, $routeParams, pembelianService) {
	$scope.pagetitle = "Pembelian";
	$scope.pagetitledesc = "Informasi Mengenai Report Pembelian";
	$scope.color = "green";
	$scope.action = "Detail";

	$scope.showDataId = function () {
		pembelianService.getId($routeParams.pembelianId).success(function (data) {
			$scope.pembelian = data;
		});
	};
	$scope.showDataId();

})

app.controller('CustomerController', function ($scope, $location, $timeout, customerService) {
	$scope.pagetitle = "Customer";
	$scope.pagetitledesc = "Informasi Mengenai Customer";
	$scope.color = "green";

	$scope.showData = function () {
		customerService.getAll().success(function (data) {
			$scope.customer = data;
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "5"; //max no of items to display in a page
			$scope.filteredItems = $scope.customer.length; //Initially for no filter  
			$scope.totalItems = $scope.customer.length;
		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.sort_by = function (predicate) {
		$scope.predicate = predicate;
		$scope.reverse = !$scope.reverse;
	};

	$scope.reload = function () {
		$location.path('/customer');
	};

});

app.controller('DetailCustomerController', function ($scope, $location, $routeParams,customerService) {
	$scope.pagetitle = "Customer";
	$scope.pagetitledesc = "Informasi Mengenai Customer";
	$scope.color = "green";
	$scope.action = "Detail";

	$scope.showDataId = function () {
		customerService.getId($routeParams.customerId).success(function (data) {
			$scope.customer = data;
		});
	};
	$scope.showDataId();

})
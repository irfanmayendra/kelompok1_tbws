-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2016 at 04:34 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_tbwebservice`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(5) NOT NULL AUTO_INCREMENT,
  `customer_username` varchar(100) NOT NULL,
  `customer_password` varchar(100) NOT NULL,
  `customer_nama` varchar(50) NOT NULL,
  `customer_asal` varchar(100) NOT NULL,
  `customer_foto` varchar(200) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_username`, `customer_password`, `customer_nama`, `customer_asal`, `customer_foto`) VALUES
(1, 'admin', '86318e52f5ed4801abe1d13d509443de', 'Ali Abdul Wahid', 'Bandung', '1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `kategori_id` int(11) NOT NULL AUTO_INCREMENT,
  `kategori_nama` varchar(40) NOT NULL,
  `kategori_icon` varchar(40) NOT NULL,
  `kategori_color` varchar(40) NOT NULL,
  PRIMARY KEY (`kategori_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`kategori_id`, `kategori_nama`, `kategori_icon`, `kategori_color`) VALUES
(1, 'Pakaian', 'ion-tshirt', 'yellow'),
(2, 'Laptop', 'ion-laptop', 'red'),
(3, 'Mobil', 'ion-model-s', 'orange'),
(4, 'Komputer', 'ion-ios-monitor-outline', 'green'),
(5, 'Olahraga', 'ion-ios-football', 'blue'),
(6, 'Sepeda', 'ion-android-bicycle', 'purple'),
(7, 'Handphone', 'ion-iphone', 'gray'),
(8, 'Camera', 'ion-ios-camera-outline', 'black'),
(9, 'Joystick', 'ion-ios-game-controller-b-outline', 'cyan'),
(10, 'Playstation', 'ion-playstation', 'blue'),
(11, 'Elektronik', 'ion-monitor', 'yellow');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE IF NOT EXISTS `produk` (
  `produk_id` int(5) NOT NULL AUTO_INCREMENT,
  `produk_nama` varchar(40) NOT NULL,
  `produk_deskripsi` varchar(255) NOT NULL,
  `produk_gambar` varchar(200) NOT NULL,
  `produk_harga` int(100) NOT NULL,
  `produk_terjual` int(100) NOT NULL,
  `produk_pesan_min` int(5) NOT NULL DEFAULT '1',
  `produk_kondisi` varchar(50) NOT NULL,
  `produk_stock` int(100) NOT NULL,
  `produk_post` datetime NOT NULL,
  `kategori_id` int(5) NOT NULL,
  `customer_id` int(5) NOT NULL,
  PRIMARY KEY (`produk_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`produk_id`, `produk_nama`, `produk_deskripsi`, `produk_gambar`, `produk_harga`, `produk_terjual`, `produk_pesan_min`, `produk_kondisi`, `produk_stock`, `produk_post`, `kategori_id`, `customer_id`) VALUES
(1, 'a Terbanyak terjual', 'Size : <br>XL<br>M<br>s', '1.png', 1, 200, 1, 'Baru', 20, '2016-04-30 02:09:10', 1, 1),
(2, 'Iphone S6', 'Size : <br>XL<br>M<br>s', '2.png', 6500000, 300, 1, 'Baru', 10, '2016-04-30 17:40:36', 7, 1),
(3, 'Avanza', '', '3.png', 99000000, 50, 1, 'Baru', 20, '2016-04-30 05:11:38', 3, 1),
(4, 'GoPro Hero 4', '', '4.png', 1500000, 76, 1, 'Baru', 20, '2016-04-30 03:10:10', 8, 1),
(5, 'PS4', '', '5.png', 5000000, 125, 1, 'Baru', 20, '2016-04-30 03:08:09', 1, 1),
(6, 'b paling mahal', '', '4.png', 2000, 100, 1, 'Baru', 20, '2016-04-30 02:07:08', 1, 1),
(7, 'c paling murah', '', '3.png', 30, 22, 1, 'Baru', 20, '2016-04-30 04:13:13', 1, 1),
(8, 'd Rumah', '', '2.png', 400, 21, 1, 'Baru', 20, '2016-04-30 03:10:13', 1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

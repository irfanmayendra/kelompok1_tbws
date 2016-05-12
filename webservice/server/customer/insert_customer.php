<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, x-xsrf-token");

$con=mysqli_connect("localhost","root","","db_tbwebservice");

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$data = json_decode(file_get_contents("php://input"));
$customer_username = mysqli_real_escape_string($con, $data->customer_username);
$customer_password = mysqli_real_escape_string($con, $data->customer_password);
$customer_nama = mysqli_real_escape_string($con, $data->customer_nama);
$customer_alamat = mysqli_real_escape_string($con, $data->customer_alamat);
$customer_email = mysqli_real_escape_string($con, $data->customer_email);
$customer_notel = mysqli_real_escape_string($con, $data->customer_notel);
$customer_asal = mysqli_real_escape_string($con, $data->customer_asal);

$sql = "INSERT INTO customer(customer_username, customer_password, customer_nama, customer_alamat, customer_email, customer_notel, customer_asal, customer_foto) values ('$customer_username', (md5('$customer_password')), '$customer_nama', '$customer_alamat', '$customer_email', '$customer_notel', '$customer_asal','default.jpg')";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record added";

mysqli_close($conn);
?>
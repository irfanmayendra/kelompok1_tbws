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
$customer_nama = mysqli_real_escape_string($con, $data->customer_nama);
$customer_alamat = mysqli_real_escape_string($con, $data->customer_alamat);
$customer_email = mysqli_real_escape_string($con, $data->customer_email);
$customer_notel = mysqli_real_escape_string($con, $data->customer_notel);
$customer_asal = mysqli_real_escape_string($con, $data->customer_asal);
 
$sql = "update customer set customer_nama='$customer_nama', customer_alamat='$customer_alamat', customer_email='$customer_email', customer_notel='$customer_notel', customer_asal='$customer_asal' where customer_username ='$customer_username'";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record update";

mysqli_close($conn);
 
?>
<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST , DELETE , GET ');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  

  require_once './functions/main.php';


  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get data .. 
    $data = json_decode(file_get_contents("php://input"));
    // Save booking in the database .. 
    saveBooking('booking',$data);

  }else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Get data .. 
    $data =  $_GET['cin1'] ; 
    // delete booking from the database .. 
    destroyBooking('booking',$data);
  }else{
    echo json_encode(['error' => 'can be get this file with POST and DELETE request only']);
  }

?>
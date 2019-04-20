<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  

  require_once './functions/main.php';

  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    fetchAllTrips('places');
  }else {
    echo json_encode(['error' => 'can be get this file with GET request only']);
  }

?>
<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  

  require_once './functions/main.php';


  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get data .. 
    $data = json_decode(file_get_contents("php://input"));

    // echo $mail . "/" . $user . "/" . $phone . "/" . $msg ; 
    // Save data in the database for scraping and use this data ... 
    saveEmailInformations('emails', $data);
    // Send The Email [ mail(To, Subject, Message, Headers, Parameters) ]
    sendEmail(ADMIN_EMAIL , $data->mail , $data->msg );
  }else {
    echo json_encode(['error' => 'can be get this file with POST request only']);
  }

?>
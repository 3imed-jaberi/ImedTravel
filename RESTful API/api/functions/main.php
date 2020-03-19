<?php 


/* 
   *
   * import the config file for all global constant ..
   * 
*/
  require_once './config/config.php';


/* 
   *
   * Connect to mysql database ..
   * 
*/
  function Connect(){
    return mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  }


/* 
   *
   * Deconnect from mysql database ..
   * 
*/
  function Deconnect($con){
    mysqli_close($con);
  }


/* 
   *
   * find all trips ( list of trips ) from db ..
   * 
*/
  function fetchAllTrips($table){
    $conn = Connect();
    $query = "SELECT * FROM $table";
    $result = mysqli_query($conn, $query);
    $listTrips = [];
    if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
        $trip = [
          'id' => $row["id"],
          'name' => $row['name'],
          'description' => $row['description'],
          'prix' => $row['prix'],
          'path' => $row['path']
        ];
        array_push($listTrips , $trip);  
      }
    } else {
      $listTrips = ['empty'=> true];
    }

    echo json_encode($listTrips);
    Deconnect($conn);
  }


/* 
   *
   * send email with native php mailer function ..
   * 
*/
  function sendEmail($admin_email, $mail, $msg){
    $headers = 'From: '.$mail.'\r\n';
    $admin =  $admin_email;
    $subject = 'Contact Form';
    mail($admin, $subject, $msg, $headers);
    echo json_encode([
      'sended' => true,
      'details' => 'if this functions don\'t return any result .. you should be put the preoject in production mode with servers ..'
    ]);
  }


/* 
   *
   * Save all emails inforamtion to database ..
   * ==> future of scraping , data science & data analytics .. 
   * 
*/
  function saveEmailInformations($table, $data){
    $conn = Connect();
    $sql_request = "INSERT INTO $table (mail,user,phone,msg) VALUES ('$data->mail','$data->user','$data->phone','$data->msg')";
    $sql_response = mysqli_query($conn , $sql_request);

    if ($sql_response) {
        echo json_encode([
          'added' => true ,
          'res' => $sql_response
        ]);
    }else {
        echo json_encode([
          'added' => false,
          'res' => $sql_response
        ]);
    }

    Deconnect($conn);
  }


/* 
   *
   *  Save all Booking action to the database ..
   * 
*/
  function saveBooking($table, $data){
    // code .. 
    $cin1=$data->cin1;
    $firstName1=$data->firstName1;
    $lastName1=$data->lastName1;
    $phone1=$data->phone1;
    $address1=$data->address1;
    $date_dept=$data->date_dept;
    $date_fin=$data->date_fin;
    $cin2=$data->cin2;
    $firstName2=$data->firstName2;
    $lastName2=$data->lastName2;
    $cin3=$data->cin3;
    $firstName3=$data->firstName3;
    $lastName3=$data->lastName3;
    $cin4=$data->cin4;
    $firstName4=$data->firstName4;
    $lastName4=$data->lastName4;
    $cin5=$data->cin5;
    $firstName5=$data->firstName5;
    $lastName5=$data->lastName5;
    $nbP=$data->nbP;

    // ================================================
    // use $data like req.body in Express.js .. 
    // => i don't know it's work or not here with php 
    // ================================================

    require_once 'validation/main.php';

    if (sizeof($errors) > 0) {
      echo json_encode($errors);
      return;
    }else {
      $conn = Connect();    
      $sql_request = "INSERT INTO $table (cin1,firstName1,lastName1,phone1,address1,date_dept,date_fin,cin2,firstName2,lastName2,cin3,firstName3,lastName3,cin4,firstName4,lastName4,cin5,firstName5,lastName5,nb_place,id_p) VALUES ('$data->cin1','$data->firstName1', '$data->lastName1', '$data->phone1', '$data->address1', '$data->date_dept', '$data->date_fin', '$data->cin2', '$data->firstName2', '$data->lastName2', '$data->cin3', '$data->firstName3', '$data->lastName3', '$data->cin4', '$data->firstName4','$data->lastName4','$data->cin5','$data->firstName5','$data->lastName5','$data->nbP','$data->bookingID') ";
      $sql_response = mysqli_query($conn, $sql_request);

      if ($sql_response) {
        echo json_encode(['add' => 'success']);
      } else {
        echo json_encode(['add' => 'failed']);
      }   
      Deconnect($conn);
    }
  }


/* 
   *
   *  Delete a Booking from the database ..
   * 
*/  
  function destroyBooking($table, $data){
    // code .. 
    $conn = Connect();
    $sql_request = "SELECT id FROM $table WHERE cin1 = $data";
    $sql_response = mysqli_query($conn , $sql_request);
    $data = mysqli_fetch_assoc($sql_response)["id"];
    $sql_request = "DELETE FROM $table WHERE id = $data";
    $sql_response = mysqli_query($conn , $sql_request);
    if ($sql_response) {
      echo json_encode(['delete' => 'success']);
    } else {
      echo json_encode(['delete' => 'failed']);
    }

    Deconnect($conn);
  }
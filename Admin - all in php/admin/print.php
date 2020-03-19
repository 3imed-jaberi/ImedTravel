<?php

  // Init session
  session_start();

  // Include db config
  require_once 'config/db.php';

  // Validate login
  if(!isset($_SESSION['email']) || empty($_SESSION['email'])){
    header('location: login.php');
    exit;
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="lib/bootstrap.min.css">
  <title>Print</title>
  <style>
    body {
      background-color: grey ;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-body bg-light mt-5">
          <?php require 'components/headerboard.php' ?>
          <div> 
              <center>
                  <h1 id="msg"> </h1>
                  <div id="printFrom">
                  <form action='print data/print.php' method='get'> 
                    <div class="form-group">
                      <input type="text" name="cin" class="form-control form-control-lg" placeholder='cin .. ' required>
                      <span class="invalid-feedback"></span>
                    </div>
                    <div>
                      <input type="submit" class="btn btn-dark btn-block" value=" go to print" />
                    </div>
                  </from>
                  </div>
              </center> 
          </div>
        </div>
      </div>
    </div>
   
    <!-- jquery -->
    <script src="lib/jquery-3.4.0.js"></script>
    <!-- my script -->
    <script src="scripts/main1.js"></script>
  </div>
</body>
</html>
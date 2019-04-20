<?php
   require_once "../config/db.php" ;

   try {
          $id = $_POST['id'];
          $name = $_POST['name'];
          $desc = $_POST['desc'];
          $prix = $_POST['prix'];
          $path = $_POST['path'];

          $sql_request = "UPDATE places SET name = ? , description = ? ,prix = ?,path = ? WHERE id = ?";
          $pdo->prepare($sql_request)->execute([$name, $desc, $prix , $path , $id]);
          header('location: http://localhost/admin/index.php?edit=false');
   } catch (PDOException $e) {
          echo "Error insert data from db with pdo : " . $e->getMessage();
   }
<?php
       require_once "../config/db.php" ;

       try {
              $name = $_POST['name'];
              $desc = $_POST['desc'];
              $prix = $_POST['prix'];
              $path = $_POST['path'];

              echo $name.'/'.$desc.'/'.$prix.'/'.$path ;
              $sql_request = "INSERT INTO places (name,description,prix,path) VALUES (?,?,?,?)";
              $pdo->prepare($sql_request)->execute([$name, $desc, $prix, $path]);
              header('location: http://localhost/admin/index.php?edit=false');
       } catch (PDOException $e) {
              echo "Error insert data from db with pdo : " . $e->getMessage();
       }
<?php
        try {
             require '../config/db.php';     
          $stmt = $pdo->query("SELECT prix FROM places");
             $sum = 0 ;
            while($row = $stmt->fetch()) {
               $sum +=$row['prix'] ;
            }
            echo json_encode ($sum) ;
        } catch (PDOException $e) {
          echo "Error get data from db with pdo : " . $e->getMessage();
        }
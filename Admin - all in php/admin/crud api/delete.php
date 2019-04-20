<?php
   require_once "../config/db.php" ;

   try {
             $id = $_GET['id'];
          $sql_request = "DELETE FROM places WHERE id = $id";
          $pdo->exec($sql_request);
          header('location: http://localhost/admin/index.php?edit=false');
   } catch (PDOException $e) {
          echo "Error delete data from db with pdo : " . $e->getMessage();
   }

?>
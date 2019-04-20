<?php
   //header('Content-Type: text/plain');
   try {
        require '../config/db.php';

        $cin=$_GET['cin'];
     $stmt = $pdo->query("SELECT * FROM booking WHERE cin1 = $cin");
     $row = $stmt->fetch() ;
    
     if ($row == null ){
          header('location: http://localhost/admin/index.php?edit=false');
     }else{
         // data 
         $cin1 = $row['cin1'] ;
         $firstName1 = $row['firstName1'] ;
         $lastName1 = $row['lastName1'] ;
         $phone1 = $row['phone1'] ;
         $address1 = $row['address1'] ;
         $nb_place = $row['nb_place'] ;
         $date_dept = $row['date_dept'] ;
         $date_fin = $row['date_fin'] ;
         $nbsp = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
         echo "
         <center>
   <h5> =========================================================== </h5>
   <h5> = $nbsp$nbsp$nbsp$nbsp$nbsp$nbsp$nbsp&nbsp;&nbsp;         = </h5>
   <h5> = $nbsp THANK YOU FOR YOUR CONFIDENCE $nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = </h5>
   <h5> = $nbsp$nbsp$nbsp$nbsp$nbsp$nbsp$nbsp&nbsp;&nbsp;         = </h5>
   <h5> =========================================================== </h5>
   <h5> = $nbsp$nbsp$nbsp$nbsp$nbsp$nbsp$nbsp&nbsp;&nbsp;         = </h5>
   <h5> =      CIN : $cin1 $nbsp$nbsp$nbsp$nbsp$nbsp$nbsp                                       = </h5>
   <h5> =      FIRST NAME : $firstName1                           = </h5>
   <h5> =      LAST NAME : $lastName1                             = </h5>
   <h5> =      PHONE : $phone1                                    = </h5>
   <h5> =      ADDRESS : $phone1                                  = </h5>
   <h5> =      NB COMPANYS : $nb_place                            = </h5>
   <h5> =      DEPART : $date_dept                                = </h5>
   <h5> =      FIN : $date_fin                                    = </h5>
   <h5> =      PAYER : XXXXX                                      = </h5>
   <h5> =                                                         = </h5>
   <h5> =========================================================== </h5> 
                    <br/>
          <button onclick='print()'>Print</button>
                    <br/>
                    <br/>
          </center>
          <a href='http://localhost/admin/index.php?edit=false'>HOME</a>
       " ; 
          }
   } catch (PDOException $e) {
     echo "Error get data from db with pdo : " . $e->getMessage();
   }

?>
<script>
 function print() {
  window.print();
}
<script>
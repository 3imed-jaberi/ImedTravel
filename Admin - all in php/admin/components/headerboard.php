     <h2>
          ADMIN Dashboard 
          <small class="text-muted"><?php echo $_SESSION['name']; ?></small>
          <a href="logout.php" class="btn btn-danger">Logout</a>
     </h2>
     <p>  <?php 
               if ( $_SERVER['PHP_SELF'] != '/admin/print.php' ) {
                    echo "<button id='add_btn' class='btn btn-success'>Add places</button>&nbsp;<a href='/admin/print.php' id='print_btn' class='btn btn-dark'  style='color:white'>Print Client Facture</a>";

               }else{
                    echo "<a href='/admin/index.php?edit=false' class='btn btn-success' style='color:white'> go to home </a>&nbsp;<button id='print_btn' class='btn btn-dark'>Print Client Facture</button>";
               };
          ?>
          <button id="money_btn" class="btn btn-info">All Money</button>
     </p>
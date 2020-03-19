<br/><br/>
<table class="table table-striped">
    <tr class="thead-dark">
      <th scope="col"> Numero </th>
      <th scope="col"> Name </th>
      <th scope="col"> Description </th>
      <th scope="col"> Prix </th>
      <th scope="col"> Path </th>
      <th scope="col"> Update </th>
      <th scope="col"> Delete </th>
    </tr>
    <?php 
      try {
        $stmt = $pdo->query("SELECT * FROM places");
        while($row = $stmt->fetch()) {
          echo "
            <tr>
              <td scope='row'> ".$row['id']."</td>
              <td>".$row['name']."</td>
              <td>".$row['description']."</td>
              <td>".$row['prix']."</td>
              <td>".$row['path']."</td>
              <td>
                <a href='index.php?edit=true&id=".$row['id']."&name=".$row['name']."&desc=".$row['description']."&prix=".$row['prix']."&path=".$row['path']."'>
                  <button class='btn btn-primary'> Update </button></a>
              </td>
              <td>
                <a href='crud api/delete.php?id=".$row['id']."'><button class='btn btn-danger'> Delete </button></a>
              </td>
            </tr>
            ";
        }
      } catch (PDOException $e) {
        echo "Error get data from db with pdo : ". $e->getMessage();
      }

    ?>
</table>
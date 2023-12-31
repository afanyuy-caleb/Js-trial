
<!-- This page gets the info from the server and saves it to the JS -->
<?php

// Connect to the db

$dsn = 'mysql:host=localhost; dbname=products';
$username = "Keyz_dev";
$password = "cream";

$pdo = new PDO($dsn, $username, $password);

if(!$pdo){
  throw new PDOException($e->getMessage());
}

// Get user info

$select = "SELECT * from fruits";
$result = $pdo->query($select);
$result = $result->fetchAll();

$img_path = "../../official/my_website/images/Fruits";

$font_path = "../../official/my_website/font/css";

?>

<script>
  // send db info into the JS

  let arrayProducts = [];
  
  class Product{
    
    constructor(id, nam, pric, discoun, img){
      this.id = id;
      this.name = nam;
      this.price = pric;
      this.discount = discoun;
      this.image = img;

      addToArray(this);

    }    
  }
  function addToArray(object){

    arrayProducts.push(object)

  }
  let image, index = 0;

  <?php
    foreach($result as $prod):
      
      $img = $prod['image'];
      $len = strlen($img);
      $image = '';

      for($i = 0; $i< $len-1; $i++){
        $image = $image.$img[$i];
      }
  ?>
  
  product = new Product(<?=$prod['id']?>,'<?= $prod['pd_name']?>', <?= $prod['price']?>, <?= $prod['discount']?>, '<?=$image?>');

  <?php 
    endforeach;
  ?>

  const string = JSON.stringify(arrayProducts);
  
  localStorage.setItem('string', string);
</script>
  
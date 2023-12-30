
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

?>

<script>
  // send db info into the JS

  let arrayProducts = [];
  
  class Product{
    
    constructor(nam, pric, discoun, img){
      this.name = nam;
      this.price = pric;
      this.discount = discoun;
      this.image = img;

    }
    
  }

  function addToArray(object){

    arrayProducts.push({
    name: object.name,
    price: object.price,
    discount: object.discount,
    image: object.image
    })

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
  
  product = new Product('<?= $prod['pd_name']?>', <?= $prod['price']?>, <?= $prod['discount']?>, '<?=$image?>');

  addToArray(product);
  <?php 
    endforeach;
  ?>

  const string = JSON.stringify(arrayProducts);
  
  localStorage.string = string
</script>
  

<?php
  include_once('cart_project.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generating html with JS</title>

  <!-- Link to font icons -->
  <link rel="stylesheet" href="<?=$font_path?>/all.css">

  <link rel="stylesheet" href="styles/index.css">
</head>
<body>
  
 <header>
  <p>Trial Cart</p>

  <a href="checkout.php" class="cart" title="cart "><i class="fas fa-camera">
    <span id="cart_qty">0</span>
  </i></a>
 </header>

 <section class="images">

 </section>

  <script type="module" src="scripts/index.js"></script>

</body>
</html>
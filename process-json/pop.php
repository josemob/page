<!DOCTYPE html>
<html>

<head>
</head>

<body>
<!-- UNIQUE CODE ------------------------------------------>
<?php
/*$data = file_get_contents("joto.json");
$products = json_decode($data, true);   
$resultado = array_unique($products);
$json_string = json_encode($resultado);
file_put_contents("HOK.json", $json_string);*/
?> 
<!-- UNIQUE CODE ------------------------------------------>
    
    
<!-- Recorrer el ID ------------------------------------------>
<?php
$dataUnique = file_get_contents("HOK.json");
$productsUnique = json_decode($dataUnique, true);

foreach ($productsUnique as $producUnique) {
echo '<pre>';
print_r($producUnique);
echo '</pre>';               
}
?> 
<!-- Recorrer el ID ------------------------------------------>
</body>

</html>
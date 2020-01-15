<!DOCTYPE html>
<html>

<head>
</head>

<body>

    <?php

$dir = "files/*"; 
$count = 0;
foreach(glob($dir) as $file) 
{  
    $count = $count + 1;
    $pop = substr($file,6);
    $a = '{"json":[';
    $b = ']}';
//guardo en otra variable el contenido actual
$get = file_get_contents($file);
$get = strval($get);
//creo una variable con el nuevo+actual
$t=$a.$get.$b;
//borro el texto
unlink($file);
//creo un nuevo archivo y escribo el nuevo texto xD
$control = fopen($file,"c");
$write = fwrite($control, $t);
print_r($count."---");
}  
    

print_r('LISTO');
    
?>

</body>

</html>

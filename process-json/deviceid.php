<!DOCTYPE html>
<html>

<head>
</head>

<body>

    <?php
    
    
    
    $array = [];
    $dir = "procesados-1/*";
    $count = 0;
    $count2 = 0;
    $datos;
    
    
        /*foreach(glob($dir) as $file) {  
    
        $data = file_get_contents($file);
        $products = json_decode($data, true);
            foreach ($products as $product) {
                    $count = $count + 1;  
            }
        } */
    
    
        foreach(glob($dir) as $file) {  
    
        $data = file_get_contents($file);
        $products = json_decode($data, true);
        
            foreach ($products as $product) {
                    $count = $count + 1;
                    if($count == 500){
                        
                    }
                
            }
        }
    
        /*foreach(glob($dir) as $file) {  
    
        $data = file_get_contents($file);
        $products = json_decode($data, true);
        
            foreach ($products as $product) {
                    $count2 = $count2 + 1;
                    $pop = round($count2 * 100 / $count)."%";
                    echo("<script>console.log('PHP: " . $pop . "');</script>");
                
                    $datos = $datos.", ".$product['deviceId'];
                    //$devic = $product['deviceId'].", "; 
            }
        }*/
    
    
    
        print_r($count);
       
        /*$a_val = explode(',',$datos);
        $a_result = array_unique($a_val);
        $varible  = implode(",",$a_result);
    
        $filee = fopen("ss.txt", "w");
        fwrite($filee, $varible . PHP_EOL);
        fclose($filee);*/
    
        //$json_string = json_encode($array);
        //file_put_contents("joto.json", $json_string);
    
        ?>

</body>

</html>

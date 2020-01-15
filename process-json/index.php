<!DOCTYPE html>
<html>

<head>
</head>

<body>

    <?php
    $array = [];
    $dir = "files/*"; 
    foreach(glob($dir) as $file) {  
        $pop = substr($file,6);
    
        $data = file_get_contents("files/".$pop);
        $products = json_decode($data, true);

            /*foreach ($products as $product) {
                echo '<pre>';
                print_r($product[]);
                echo '</pre>';
            }*/
        
            foreach ($products as $product) {
                foreach ($product as $produc) {
                    /*echo $produc['type']."<br>";*/
                    if ($produc['type'] == 'events1' && $produc['campaignName'] == 'DTS Supervia - Octubre'){
                        
                        $array[] =   [
                                        "campaignName" => $produc['campaignName'],
                                        "deviceId" => $produc['deviceId'],
                                        "timestamp" => $produc['timestamp']
                                    ]; 
                    }
                }
            }
        
        $json_string = json_encode($array);
        file_put_contents($pop, $json_string);
        }
    
        print_r('LISTO');
    
        ?>
    
        

</body>

</html>

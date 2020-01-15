<!DOCTYPE html>
<html>

<head>
</head>

<body>

    <?php
    $array = [];
    
    $dataUnique = file_get_contents("HOK.json");
    $productsUnique = json_decode($dataUnique, true);
    
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
                    if ($produc['type'] == 'impression' && $produc['campaignName'] == 'Donde Viven - Supervia Conversiones - OCT'){
                        
                        foreach ($productsUnique as $producUnique) {
                            if($produc['deviceId'] == $producUnique){
                                $array[] =   [
                                        "type" => $produc['type'],
                                        "campaignName" => $produc['campaignName'],
                                        "conversion_areaid" => $produc['conversion_areaid'],
                                        "deviceId" => $produc['deviceId'],
                                        "timestamp" => $produc['timestamp']
                                    ];
                            }             
                        }
                    }
                }
            }
        
        $json_string = json_encode($array);
        file_put_contents($pop, $json_string);
        }  
        ?>

</body>

</html>

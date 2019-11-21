<!DOCTYPE html>
<html>
<head>
</head>

<body>

            <?php
            $data = file_get_contents("data/session-biznagamedia-2019-11-07T00.json");
            $products = json_decode($data, true);

            /*foreach ($products as $product) {
                echo '<pre>';
                print_r($product[]);
                echo '</pre>';
            }*/
            $array = [];
            foreach ($products as $product) {
                
                foreach ($product as $produc) {
                
                    /*echo $produc['type']."<br>";*/
                    if ($produc['type'] == 'events1' && $produc['campaignName'] == 'DTS Supervia - Octubre'){
                       
                        $array[] =   [
                                        "type" => $produc['type'],
                                        "campaignName" => $produc['campaignName'],
                                        "conversion_areaid" => $produc['conversion_areaid'],
                                        "deviceId" => $produc['deviceId'],
                                        "timestamp" => $produc['timestamp']
                                    ];
                        if($produc['campaignName'] == ''){
                            print_r("yeii");
                        }
                        
                    }
                    
                    
                }
                
            }
    
    
    //echo count($array);
    
    echo '<pre>';
                        print_r($array);
                        echo '</pre>';
    
                
            ?>

</body>
</html>

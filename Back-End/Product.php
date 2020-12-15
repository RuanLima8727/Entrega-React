<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api// 
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Connection.php";

class Product
{

    public static function getProduct()
    {
        $Connection = Connection::getDb();

        $stmt = $Connection->query("SELECT * FROM produto");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    

    }


}



$Prod = Product::getProduct();

print_r(json_encode($Prod));

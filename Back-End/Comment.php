<?php


require "./Models/Connection.php";

class Comment
{

    public static function getComment()
    {
        $Connection = Connection::getDb();

        $stmt = $Connection->query("SELECT * FROM cliente INNER JOIN comentario ON cliente.idcliente = comentario.idcliente;");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    

    }


}

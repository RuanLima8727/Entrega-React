<?php

require "Comment.php";

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api// 
header("Content-type: application/json"); //Indicação de arquivo JSON

$Com = Comment::getComment();

print_r(json_encode($Com));

<?php

if(isset($_REQUEST)){
    $env=$_REQUEST['nome'];

// creating a new file
    file_put_contents("novo.php", $env);
}
//    echo "<script>window.alert(file_get_contents('novo.php'))</script>";
    echo file_get_contents("novo.php");

?>

<?php
require "DBconnection.php";

//connect to database and prepare sql statement
    $db = new DBconnection();
    $db = $db->connect();
    $sql= "INSERT INTO robotpath (path,date,time) VALUES(?,?,?) ";
    $stmt=$db->prepare($sql);
    
//taking form inputs 
    $path=$_GET["path"];
    $date=$_GET["date"];
    $time=$_GET["time"];
//adding to database
    $stmt->execute([$path,$date,$time]);
    header("location:movement.html");

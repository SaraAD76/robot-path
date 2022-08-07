<?php
//simple connection class using PDO
class DBconnection{
    //change this info according to your DB
    private $host ='localhost';
    private $user ='root';
    private $password ='';
    private $DBname ='robot';

    public function connect(){

        try{
        $DSN = 'mysql:host=' . $this->host . ';dbname=' . $this->DBname;
        $pdo = new PDO($DSN,$this->user,$this->password);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
        return $pdo;
        }
        catch (PDOException $exception){
            print "Error!:". $exception->getMessage()."<br>";
            die();
        }
    }

}
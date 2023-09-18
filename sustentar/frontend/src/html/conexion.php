<?php

    class database{

        private static $dbHost = "localhost";
        private static $dbName = "store";
        private static $dbUsername = "root";
        private static $dbUserpassword = "";
        
        public static function conectar(){

            try {

                $pdo = new PDO("mysql:host=".self::$dbHost.";dbname=".self::$dbName,self::$dbUsername,self::$dbUserpassword);
                $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                return $pdo;
            } catch (Exception $e) {
                die($e->getMessage());
            }

        }

    }

?>
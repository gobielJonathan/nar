<?php
namespace App\Config;

class Config {
    private static $instance = null;

    private function __construct(){
        
    }

    public static function getInstance(){
        if (self::$instance == null) {
            # code...
            self::$instance = new Config;
        }
        return self::$instance;
    }

    public function all(){
        return  fopen("../.env.json","r");
    }
}
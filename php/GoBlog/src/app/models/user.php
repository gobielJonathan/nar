<?php

namespace App\Models;

require_once '../../vendor/autoload.php';

use Database\Connection;

class User extends Model
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table= "users";
        $this->database = Connection::getInstance();
     }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new User;
        return self::$instance;
    }

    public function add($model)
    { }

    public function remove($model)
    { }

    public function update($model)
    { }

    public function gets()
    { 
        
    }

    public function get($id)
    { }
}

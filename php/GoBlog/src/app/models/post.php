<?php

namespace App\Models;

require_once '../../vendor/autoload.php';

use Database\Connection;

class Post extends Model
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table= "posts";
        $this->database = Connection::getInstance();
     }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Post();
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

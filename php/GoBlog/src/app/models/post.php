<?php

namespace App\Models;

require_once '../../vendor/autoload.php';
use Database\Database;

class Post implements Model
{

    private static $instance = null;

    private function __construct()
    { }
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
        $database = new Database;
    }

    public function get($id)
    { }
}

<?php

namespace App\Models;

require_once '../../vendor/autoload.php';

use Database\Connection;

class Follow
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table = "follows";
        $this->database = Connection::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Follow;
        return self::$instance;
    }

   
}

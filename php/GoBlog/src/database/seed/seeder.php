<?php

namespace Database\Seed;

use Database\Connection;

class Seeder
{
    static $instance = null;

    private $database = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            # code...
            return self::$instance = new Seeder;
        }
        return self::$instance;
    }
    private function __construct()
    {
        $this->database = Connection::getInstance();
    }

    public function seed()
    {

        $seeds = [
            // new table_post_seeder,
            // new table_user_seeder,
            // new table_follow_seeder
            new table_chat_seeder
        ];

        $queries = "";

        foreach ($seeds as $seed) {
            # code...
            $queries .= $seed->seed();
        }
        $this->database->multiQuery($queries);
        return $this->database->getError();
    }
}

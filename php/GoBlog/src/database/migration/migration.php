<?php

namespace Database\Migration;

use Database\Connection;

class Migration
{

    static $instance = null;

    private $database = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            # code...
            return self::$instance = new Migration;
        }
        return self::$instance;
    }
    private function __construct()
    {
        $this->database = Connection::getInstance();
     }

    public function run()
    {
        $migrations = [
            new create_post_table, 
            new create_user_table,
            new create_comment_table,
            new create_follow_table, 
            new create_chat_table,
        ];

        $queries = "";

        foreach ($migrations as  $val) {
            # code...
            $queries .= $val->query();
        } 

        $this->database->multiQuery($queries);
        return $this->database->getError() ??  "success migrated";
    }
}


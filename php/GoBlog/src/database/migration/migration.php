<?php

namespace Database\Migration;

class Migration
{

    static $instance = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            # code...
            return self::$instance = new Migration;
        }
        return self::$instance;
    }
    private function __construct()
    { }

    public function run()
    {
        $migrations = [
            new create_post_table,
            new create_user_table
        ];
        $msg = [];

        foreach ($migrations as $key => $val) {
            # code...
            $msg[$key] = $val->run();
            if ($msg[$key] == TRUE) {
                # code...
                $msg[$key] = $val. " was successfully migrate";
            }else {
                $msg[$key] =  $val. " was failed migrate cause ". $msg[$key];
             }
        }
        return $msg;
    }
}


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
    {
        $sql = sprintf("SELECT * FROM users WHERE username = '%s'", $model['username']);
        $res = $this->database->query($sql);

        if($res->num_rows > 0)
            return "username already exists";

        $sql = sprintf("INSERT INTO users(`fullname`,`username`,`password`, `picture_path`) VALUES('%s','%s','%s','%s')", 
            $model['username'],
            $model['fullname'],
            $model['password'],
            "https://lorempixel.com/300/300/?66224"
        );
        return $this->database->query($sql);
     }

    public function remove($model)
    { }

    public function update($model)
    { }

    public function gets($filter, $page)
    { 
        $sql = sprintf("SELECT fullname, username, picture_path FROM users WHERE deleted_at IS NULL AND id = %d",$filter);

        $res = $this->database->query($sql);
        
        $data = [];
        
        if ($res->num_rows > 0) {
            # code...
            $data = $res->fetch_assoc();
        }

        $sql = sprintf("SELECT * FROM posts WHERE deleted_at IS NULL AND user_id = %d",$filter);

        $res = $this->database->query($sql);
        
        if ($res->num_rows > 0) {
            # code...
            while ($row = $res->fetch_assoc()) {
                # code...
                $data["post"][] = $row;
            }
        }

        return $data;
    }

    public function get($id)
    { }
}

<?php

namespace App\Models;

require_once '../../vendor/autoload.php';

use Database\Connection;

class Auth
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table = "users";
        $this->database = Connection::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Auth;
        return self::$instance;
    }

    public function check($username, $password)
    {
        $sql = "SELECT id, fullname, username,picture_path, status FROM users WHERE username = ? AND password = ?";
        // prepare and bind
        $stmt = $this->database->getConnection()->prepare($sql);

        $stmt->bind_param("ss", $username, $password);

        $stmt->execute();

        $res = $stmt->get_result();
        $stmt->close();

        $user = $res->fetch_assoc();

        if($user['id'] == null){
            return null;
        }

        $sql = sprintf(
            "SELECT COUNT(followed_id) as follows FROM `follows` WHERE follower_id = %d
            union
            SELECT COUNT(follower_id)as follows FROM `follows` WHERE followed_id = %d",
            $user['id'],$user['id']
        );

        $res = $this->database->query($sql);

        $follower = $res->fetch_assoc()['follows'];
        $following = $res->fetch_assoc()['follows'];

        if ($res->num_rows == 0)
            return null;
            
        return (object)array_merge(
            (array) $user,
            (array) [
                "follower" => $follower, 
                "following" => $following
            ]
        );
    }

    public function forgetPassword($email)
    { }
}

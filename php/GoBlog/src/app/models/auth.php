<?php

namespace App\Models;

require_once dirname(__DIR__) . '/../../vendor/autoload.php';

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

        return $user;
    }

    public function getFollow($id)
    {

        $sql = sprintf(
            "SELECT COUNT(followed_id) as follows FROM `follows` WHERE follower_id = %d
                union
            SELECT COUNT(follower_id)as follows FROM `follows` WHERE followed_id = %d",
            $id,
            $id
        );

        $res = $this->database->query($sql);

        $follower = $res->fetch_assoc()['follows'] ?? 0;
        $following = $res->fetch_assoc()['follows'] ?? 0;

        if ($res->num_rows == 0)
            return null;

        return [
            'follower' => (int)$follower,
            'following' => (int)$following
        ];
    }

    public function addFollow($follower_id, $followed_id){
        $sql = sprintf(
            "INSERT INTO follows(`follower_id`,`followed_id`) VALUES (%d, %d)",
            $follower_id,
            $followed_id
        );

        $this->database->query($sql);

        return $this->database->getError() ?? "Success follow";
    }

    public function forgetPassword($email)
    { }
}

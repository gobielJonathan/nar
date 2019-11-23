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
        $sql = "SELECT fullname, username,picture_path FROM users WHERE username = ? AND password = ?";
        // prepare and bind
        $stmt = $this->database->getConnection()->prepare($sql);

        $stmt->bind_param("ss", $username, $password);

        $stmt->execute();

        $res = $stmt->get_result();
        $stmt->close();

        if ($res->num_rows == 0)
            return null;
        return $res->fetch_assoc();
    }

    public function forgetPassword($email)
    {
       
    }
}

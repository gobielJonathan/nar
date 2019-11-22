<?php

namespace Database;

use mysqli;
use Util\Config;

class Connection
{
    private $username = "";
    private $database = "";
    private $servername = "";
    private $password = "";
    private $conn = null;

    static $instance = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            # code...
            self::$instance = new Connection;
        }
        return self::$instance;
    }

    private function __construct()
    {
        $config = Config::all();

        $this->username = $config["username"];
        $this->password = $config["password"];
        $this->servername = $config["servername"];
        $this->database = $config["database"];

        $this->conn = new mysqli($this->servername, $this->username, $this->password);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }

        $res = $this->createDatabase();
        if ($res == 1) {
            # code...
            $this->conn->close();
            $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->database);
        }
    }

    public function createDatabase()
    {
        $sql = sprintf("CREATE DATABASE IF NOT EXISTS %s", $this->database);
        return $this->query($sql);
    }

    public function dropDatabase()
    {
        $sql = sprintf("DROP DATABASE %s", $this->database);
        $this->query($sql);
    }

    public function query($query)
    {
        $res = $this->conn->query($query);
        if ($this->conn->errno) {
            # code...
            return $this->conn->error;
        }
        return $res;
    }

    public function multiQuery($query)
    {
        $res = $this->conn->multi_query($query);

        if ($this->conn->errno) {
            # code...
            return $this->conn->error;
        }

        return $res;
    }

    public function getError(){
        if ($this->conn->errno) {
            # code...
            return $this->conn->error;
        }
        return null;
    }
}

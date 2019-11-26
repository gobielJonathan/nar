<?php

namespace App\Models;

require_once dirname(__DIR__) . '/../../vendor/autoload.php';

use Database\Connection;
use Util\Pagination;

class Chat extends Model
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table = "chats";
        $this->database = Connection::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Chat;
        return self::$instance;
    }

    public function add($model)
    {
        $sql = "INSERT INTO chats(`user_id`,`content`)VALUES(?,?)";
        // prepare and bind
        $stmt = $this->database->getConnection()->prepare($sql);

        $stmt->bind_param("ds", $model['user_id'],$model['message']);

        $stmt->execute();

        $res = $stmt->get_result();

        if($res == false)
            return null;

        $last_id = $this->get($stmt->insert_id);
        $stmt->close();

        echo $last_id."\n\n\n\n";

        return "ea";
    }

    public function remove($model)
    { }

    public function update($model)
    { }

    public function gets($query, $page)
    {
        $sql = sprintf("SELECT c.* , u.username, u.picture_path FROM `chats` c JOIN `users` u ON u.id = c.user_id  WHERE c.deleted_at IS NULL ORDER BY created_at DESC  LIMIT %d,%d", ($page - 1) * Pagination::$PER_PAGE, Pagination::$PER_PAGE);

        $res = $this->database->query($sql);
        $data = [];

        if ($res->num_rows > 0) {
            # code...
            while ($row = $res->fetch_assoc()) {
                # code...
                $data[] = $row;
            }
        }
        return $data;
    }

    public function get($id)
    {
        $sql = "SELECT c.* , u.username, u.picture_path FROM `chats` c JOIN `users` u ON u.id = c.user_id  WHERE c.id =? ";
        // prepare and bind
        $stmt = $this->database->getConnection()->prepare($sql);

        $stmt->bind_param("d", $id);

        $stmt->execute();

        $res = $stmt->get_result();
        $stmt->close();

        return $res->fetch_assoc();
    }
}

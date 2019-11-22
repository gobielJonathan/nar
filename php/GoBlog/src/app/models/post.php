<?php

namespace App\Models;

require_once '../../vendor/autoload.php';

use Database\Connection;
use Util\Pagination;

class Post extends Model
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table = "posts";
        $this->database = Connection::getInstance();
        $sql = "SELECT COUNT(*) as total_data FROM posts";
    }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Post();
        return self::$instance;
    }

    public function add($model)
    { }

    public function remove($model)
    { }

    public function update($model)
    { }

    public function gets($filter, $page)
    {
        $sql = sprintf("SELECT COUNT(*)as total_data FROM posts p JOIN users u ON u.id = p.user_id AND p.title LIKE '%%%s%%'  WHERE p.deleted_at IS NULL", $filter);
        $res = $this->database->query($sql);
        $this->total_data = $res->fetch_assoc()["total_data"];

        $sql = sprintf("SELECT p.*, u.fullname, u.username, u.picture_path FROM posts p JOIN users u ON u.id = p.user_id AND p.title LIKE '%%%s%%'  WHERE p.deleted_at IS NULL ORDER BY created_at DESC LIMIT %d,%d", $filter, $page, Pagination::$PER_PAGE);

        
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
    { }
}

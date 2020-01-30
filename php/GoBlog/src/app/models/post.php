<?php

namespace App\Models;

require_once dirname(__DIR__) . '/../../vendor/autoload.php';

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
    }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Post();
        return self::$instance;
    }

    public function add($model)
    {
        $sql = sprintf("INSERT INTO %s(`content`,`user_id`,`title`)VALUES (?,?,?)", $this->table);

        $stmt = $this->database->getConnection()->prepare($sql);

        $stmt->bind_param("sds", $model['content'], $model['user_id'], $model['title']);

        $stmt->execute();

        $res = $stmt->get_result();

        $stmt->close();

        return $this->database->getError() ?? "success created";
    }


    public function remove($model)
    {
    }

    public function update($model)
    {
    }

    public function gets($query, $page)
    {
        $sql = sprintf("SELECT COUNT(*)as total_data 
            FROM posts p JOIN users u ON u.id = p.user_id AND (
                p.title LIKE '%%%s%%' OR
                p.content LIKE '%%%s%%'
            )  WHERE p.deleted_at IS NULL", $query['q'], $query['q']);

        $res = $this->database->query($sql);
        $this->total_data = $res->fetch_assoc()["total_data"];

        $sql = sprintf("SELECT p.*, u.fullname, u.username, u.picture_path,IF( EXISTS(
                SELECT *
                from follows f
                where f.followed_id = %d and f.follower_id = u.id), 1, 0
            )as already_follow     
            FROM posts p JOIN users u ON u.id = p.user_id AND (
                p.title LIKE '%%%s%%' OR
                p.content LIKE '%%%s%%' 
           )  WHERE p.deleted_at IS NULL 
           ORDER BY created_at DESC
           LIMIT %d,%d",$query['user_id'], $query['q'], $query['q'], ($page - 1) * Pagination::$PER_PAGE, Pagination::$PER_PAGE);


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
    }
}

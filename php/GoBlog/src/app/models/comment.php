<?php

namespace App\Models;

require_once dirname(__DIR__) . '/../../vendor/autoload.php';

use Database\Connection;
use Util\Pagination;

class Comment extends Model
{
    static $instance = null;
    private $database = null;

    private function __construct()
    {
        $this->table = "comments";
        $this->database = Connection::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null)
            self::$instance = new Comment; 
        return self::$instance;
    }

    public function add($model)
    {
        $sql = sprintf("INSERT INTO %s(`content`,`user_id`,`title`)VALUES (?,?,?)");

        $stmt = $this->database->getConnection()->prepare($sql);

        $stmt->bind_param("sds", $model['content'], $model['user_id'], $model['title']);

        $stmt->execute();

        $res = $stmt->get_result();
        $stmt->close();

        return $res;
    }

    public function remove($model)
    { }

    public function update($model)
    { }

    public function gets($query, $page)
    {
        $sql = sprintf("SELECT COUNT(c.id) as total_data FROM `comments` c JOIN `users` u ON u.id = c.user_id  WHERE c.deleted_at IS NULL AND c.post_id = %d", $query);

        $res = $this->database->query($sql);
        $this->total_data = $res->fetch_assoc()["total_data"];

        $sql = sprintf("SELECT c.*, u.fullname, u.username, u.picture_path FROM comments c JOIN users u ON u.id = c.user_id WHERE c.deleted_at IS NULL AND c.parent_id IS NULL AND c.post_id = %d ORDER BY created_at DESC LIMIT %d,%d",$query,  ($page - 1) * Pagination::$PER_PAGE, Pagination::$PER_PAGE);


        $res = $this->database->query($sql);

        $children = [];

        if ($res->num_rows > 0) {
            # code...
            while ($row = $res->fetch_assoc()) {
                # code...
                $children[$row['id']]['data'] = $row;          
                $this->getCommentChild($row['id'], $children[$row['id']]);
            }
        }

        return $children;
    } 

    public function getCommentChild($id, &$arr)
    {
        $sql = sprintf("SELECT c.*, u.fullname, u.username, u.picture_path FROM comments c JOIN users u ON u.id = c.user_id WHERE c.deleted_at IS NULL AND c.parent_id = %d", $id);

        $res = $this->database->query($sql);

        if ($res->num_rows > 0) {
            # code...
            while ($row = $res->fetch_assoc()) {
                # code...
                $arr['child'][$row['id']] = $row;          

                $this->getCommentChild($row['id'], $arr['child'][$row['id']]);
            }
        } else {
            $arr['child'] = (object)[];
        };
    }

    public function get($id)
    { }
}

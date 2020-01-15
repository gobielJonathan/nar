<?php

namespace Database\Migration;

use App\Models\Chat;
use App\Models\Comment;

class create_comment_table extends Migrater
{
    public function query()
    {
        $sql = sprintf("DROP TABLE IF EXISTS %s;", Comment::getInstance()->table);
        $sql .= sprintf(
            "     CREATE TABLE %s (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    post_id INT, 
                    user_id INT NOT NULL, 
                    parent_id INT, 
                    content TEXT, 
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME,
                    deleted_at DATETIME
                );
            ",
            Comment::getInstance()->table
        );
        return $sql;
    }

    public function __toString()
    {
        return "create_comment_table";
    }
}

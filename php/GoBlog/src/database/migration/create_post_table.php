<?php

namespace Database\Migration;

use App\Models\Post;

class create_post_table extends Migrater
{
    public function query()
    {
        $sql = sprintf("DROP TABLE IF EXISTS %s;", Post::getInstance()->table);
        $sql .= sprintf(
            "     CREATE TABLE %s (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    content VARCHAR(200),
                    title VARCHAR(100) NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME,
                    deleted_at DATETIME
                );
            ",
            Post::getInstance()->table
        );
        return $sql;
    }

    public function __toString()
    {
        return "create_post_table";
    }
}

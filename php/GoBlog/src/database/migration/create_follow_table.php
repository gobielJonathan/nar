<?php

namespace Database\Migration;

use App\Models\Follow;

class create_follow_table extends Migrater
{
    public function query()
    {
        $sql = sprintf("DROP TABLE IF EXISTS %s;", Follow::getInstance()->table);
        $sql .= sprintf(
            "     CREATE TABLE %s (
                    id INT UNSIGNED DEFAULT uuid(),
                    follower_id INT NOT NULL,
                    followed_id INT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME,
                    deleted_at DATETIME,
                    PRIMARY KEY (follower_id, followed_id)
                );
            ",
            Follow::getInstance()->table
        );
        return $sql;
    }

    public function __toString()
    {
        return "create_follow_table";
    }
}

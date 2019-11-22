<?php

namespace Database\Migration;

use App\Models\User;

class create_user_table extends Migrater
{
    public function query()
    {
        $sql = sprintf("DROP TABLE IF EXISTS %s;", User::getInstance()->table);
        $sql .= sprintf(
            "     CREATE TABLE %s (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    fullname VARCHAR(200),
                    username VARCHAR(100) NOT NULL,
                    password VARCHAR(100) NOT NULL,
                    picture_path VARCHAR(200) NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME,
                    deleted_at DATETIME
                );
            ",
            User::getInstance()->table
        );
        return $sql;
    }

    public function __toString()
    {
        return "create_user_table";
    }
}

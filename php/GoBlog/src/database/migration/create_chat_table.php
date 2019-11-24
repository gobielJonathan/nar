<?php

namespace Database\Migration;

use App\Models\Chat;

class create_chat_table extends Migrater
{
    public function query()
    {
        $sql = sprintf("DROP TABLE IF EXISTS %s;", Chat::getInstance()->table);
        $sql .= sprintf(
            "     CREATE TABLE %s (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    user_id INT NOT NULL, 
                    content TEXT, 
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME,
                    deleted_at DATETIME
                );
            ",
            Chat::getInstance()->table
        );
        return $sql;
    }

    public function __toString()
    {
        return "create_chat_table";
    }
}

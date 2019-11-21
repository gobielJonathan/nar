<?php
namespace Database\Migration;

use Database\Database;

require_once '../../../vendor/autoload.php';


class TablePostMigration implements Migrater{

    public function run()
    {
        $database = new Database;
        $query = `
            CREATE TABLE (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_id INT NOT NULL,
                content STRING NOT NULL
                created_at DATETIME DEFAULT NOW(),
                deleted_at DATETIME DEFAULT NULL,
                updated_at DATETIME DEFAULT NULL
            )
        `;
        $database->execQuery($query);
    }
}
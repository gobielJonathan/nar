<?php

namespace Database\Seeder;

use Database\Database;
use Faker\Factory;

class TableUserSeeder implements Seeder
{

    public function seed()
    {
        $database = new Database;
        $faker = Factory::create();

        for ($i = 0; $i < 100; $i++) {
            # code...
            $id = mt_rand(1, 100);

            $sql = `
                INSERT INTO users(user_id,content,created_at)
                VALUES($id, $faker->text,$faker->date())
            `;
            $database->execQuery($sql);
        }
    }
}

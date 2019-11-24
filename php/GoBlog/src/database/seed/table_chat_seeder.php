<?php
namespace Database\Seed;

use App\Models\Chat;
use Faker\Factory;

class table_chat_seeder implements Seed{

    public function seed(){
        $faker = Factory::create();

        $sql = sprintf("INSERT INTO %s(`user_id`,`content`)VALUES", Chat::getInstance()->table);
        $vals = [];
        for ($i=0; $i < 10; $i++) { 
            # code...
            $vals[] =  sprintf("(%d,'%s')",mt_rand(1,4500), $faker->text);
        }
        return $sql . implode(",", $vals) . ";";
    }
}
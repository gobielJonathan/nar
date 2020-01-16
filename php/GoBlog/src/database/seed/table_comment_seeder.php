<?php
namespace Database\Seed;

use App\Models\Comment;
use Faker\Factory;

class table_comment_seeder implements Seed{

    public function seed(){
        $faker = Factory::create();

        $sql = sprintf("INSERT INTO %s(`post_id`,`user_id`,`content`)VALUES", Comment::getInstance()->table);
        $vals = [];
        for ($i=0; $i < 2; $i++) { 
            # code...
            $vals[] =  sprintf("(%d,%d,'%s')",27648,mt_rand(1,7701), $faker->text);
        }

        return $sql . implode(",", $vals) . ";";
    }
}
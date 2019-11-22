<?php
namespace Database\Seed;

use App\Models\Post;
use Faker\Factory;

class table_post_seeder implements Seed{

    public function seed(){
        $faker = Factory::create();

        $sql = sprintf("INSERT INTO %s(`content`,`title`,`user_id`)VALUES", Post::getInstance()->table);
        $vals = [];
        for ($i=0; $i < 1000; $i++) { 
            # code...
            $vals[] =  sprintf("(\"%s\",\"%s\", %d)",$faker->text, $faker->company, mt_rand(1,200));
        }
        return $sql . implode(",", $vals) . ";";
    }
}
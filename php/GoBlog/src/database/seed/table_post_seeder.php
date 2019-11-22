<?php
namespace Database\Seed;

use App\Models\Post;
use Faker\Factory;

class table_post_seeder implements Seed{

    public function seed(){
        $faker = Factory::create();

        $sql = sprintf("INSERT INTO %s(`content`,`title`)VALUES", Post::getInstance()->table);
        $vals = [];
        for ($i=0; $i < 200; $i++) { 
            # code...
            $vals[] =  sprintf("(\"%s\",\"%s\")",$faker->text, $faker->company);
        }
        return $sql . implode(",", $vals) . ";";
    }
}
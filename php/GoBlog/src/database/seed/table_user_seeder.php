<?php
namespace Database\Seed;

use App\Models\Post;
use App\Models\User;
use Faker\Factory;

class table_user_seeder implements Seed{

    public function seed(){
        $faker = Factory::create();

        $sql = sprintf("INSERT INTO %s(`fullname`,`username`,`password`,`picture_path`)VALUES", User::getInstance()->table);
        $vals = [];
        for ($i=0; $i < 500; $i++) { 
            # code...
            $vals[] =  sprintf("(\"%s\",\"%s\",\"%s\",\"%s\")",$faker->name, $faker->name, base64_encode("password"), $faker->imageUrl(300,300));
        }
        return $sql . implode(",", $vals) . ";";
    }
}
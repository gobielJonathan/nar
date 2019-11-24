<?php
namespace Database\Seed;

use App\Models\Follow;
use Faker\Factory;

class table_follow_seeder implements Seed{

    public function seed(){
        $faker = Factory::create();

        $sql = sprintf("INSERT INTO %s(`follower_id`,`followed_id`)VALUES", Follow::getInstance()->table);
        $vals = [];
        for ($i=0; $i < 1000; $i++) { 
            # code...
            $vals[] =  sprintf("(%d,%d)",mt_rand(1,7701),mt_rand(1,7701));
        }
        return $sql . implode(",", $vals) . ";";
    }
}
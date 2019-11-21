<?php
namespace Database\Seeder;

require_once '../../vendor/fzaninotto/faker/src/autoload.php';

require_once '../../vendor/autoload.php';


interface Seeder{
    public function seed();
}
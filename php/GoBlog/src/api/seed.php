<?php

require_once '../../vendor/autoload.php';

use Database\Seed\Seeder;
use Util\Responser;

$seed = Seeder::getInstance();
echo Responser::response($seed->seed());
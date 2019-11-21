<?php
require '../../vendor/autoload.php';

use Database\Migration\Migration;
use Util\Responser;


$migration = Migration::getInstance();
echo Responser::response($migration->run());

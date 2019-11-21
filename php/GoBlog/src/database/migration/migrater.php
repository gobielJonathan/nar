<?php

namespace Database\Migration;

use Database\Connection;

abstract class Migrater
{
    protected $database;

    public function __construct()
    {
        $this->database = Connection::getInstance();
    }

    abstract public function run();

}

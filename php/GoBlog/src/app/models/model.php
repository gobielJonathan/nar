<?php
namespace App\Models;

abstract class Model {
    public $table = "";
    
    abstract public function add($model);
    abstract public function remove($model);
    abstract public function update($model);
    abstract public function gets();
    abstract public function get($id);
}
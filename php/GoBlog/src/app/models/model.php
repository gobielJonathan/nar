<?php
namespace App\Models;

abstract class Model {
    public $table = "";
    public $total_data = 0;
    abstract public function add($model);
    abstract public function remove($model);
    abstract public function update($model);
    abstract public function gets($filter ="",$page);
    abstract public function get($id);
}
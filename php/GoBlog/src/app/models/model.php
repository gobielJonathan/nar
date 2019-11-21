<?php
namespace App\Models;

interface Model {
    public function add($model);
    public function remove($model);
    public function update($model);
    public function gets();
    public function get($id);
}
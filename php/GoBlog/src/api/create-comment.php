<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");
require_once '../../vendor/autoload.php';

use App\Models\Comment;
use Util\Responser;

$post = Comment::getInstance();

if (!isset($_POST['post_id'])) {
    # code...
    echo Responser::response([
        'post_id' => 'must be required'
    ]);
    return;
} else if(!isset($_POST['user_id'])) {
    echo Responser::response([
        'user_id' => 'must be required'
    ]);
    return;
}else if(!isset($_POST['content'])) {
    echo Responser::response([
        'content' => 'must be required'
    ]);
    return;
}

$model = [
    'content' => $_POST['content'],
    'post_id' => (int)$_POST['post_id'],
    'user_id' => (int)$_POST['user_id'],
    'parent_id' => (int)(isset($_POST['parent_id']) && !empty($_POST['parent_id']) ?  $_POST['parent_id'] :  -1),
];


echo Responser::response($post->add($model));

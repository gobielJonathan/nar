<?php

require_once '../../vendor/autoload.php';

use App\Models\Post;
use Util\Responser;

$post = Post::getInstance();

if (!isset($_POST['content'])) {
    # code...
    echo Responser::response([
        'content' => 'must be required'
    ]);
    return;
} else if (!isset($_POST['user_id'])) {
    # code...
    echo Responser::response([
        'user_id' => 'must be required'
    ]);
    return;
} else if(!isset($_POST['title'])) {
    echo Responser::response([
        'title' => 'must be required'
    ]);
    return;
}

$model = [
    'content' => $_POST['content'],
    'user_id' => (int)$_POST['user_id'],
    'title' => $_POST['title']
];

echo Responser::response($post->add($model));

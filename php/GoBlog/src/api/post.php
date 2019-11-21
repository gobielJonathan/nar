<?php

require_once '../../vendor/autoload.php';

use App\Models\Post;

$post = Post::getInstance();
echo json_encode($post->gets());

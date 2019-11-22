<?php

require_once '../../vendor/autoload.php';

use App\Models\Post;
use Util\Filter;
use Util\Pagination;

$post = Post::getInstance();
$page = $_GET['page'] ?? 1;

$title = $_GET['title'] ?? "";

$data = $post->gets($title, $page);

$params = Filter::getParams($_GET);


echo Pagination::paginate($data, $page, Post::getInstance()->total_data, "http://localhost:8000/src/api/post.php?".$params);

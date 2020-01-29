<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

require_once '../../vendor/autoload.php';

use App\Models\Post;
use Util\Filter;
use Util\Pagination;

$post = Post::getInstance();
$page = $_GET['page'] ?? 1;

$query = [
    'q'  => $_GET['q'] ?? "",
    'user_id' => $_GET['user_id'] ?? 0
];

$data = $post->gets($query, $page);

$params = Filter::getParams($_GET);


echo Pagination::paginate($data, $page, Post::getInstance()->total_data, "http://localhost:8000/src/api/post.php?".$params);

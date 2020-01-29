<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");
require_once '../../vendor/autoload.php';

use App\Models\Chat;
use Util\Filter;
use Util\Pagination;

$post = Chat::getInstance();

$page = $_GET['page'] ?? 1;

$data = $post->gets("", $page);

$params = Filter::getParams($_GET);

echo Pagination::paginate($data, $page, 0, "http://localhost:8000/src/api/get-chat.php?".$params);

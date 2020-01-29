<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

require_once '../../vendor/autoload.php';

use App\Models\Comment;
use Util\Filter;
use Util\Pagination;
use Util\Responser;

if(!isset($_GET['id'])){
    echo Responser::response([
        "error" => "Id must be required"
    ]);
    return;
}

$comment = Comment::getInstance();
$id = $_GET['id'];

$page = $_GET['page'] ?? 1;

$data = $comment->gets($id, $page);

$params = Filter::getParams($_GET);


echo Pagination::paginate($data, $page, Comment::getInstance()->total_data, "http://localhost:8000/src/api/get-comment.php?".$params);

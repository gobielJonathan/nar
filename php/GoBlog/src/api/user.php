<?php


require_once '../../vendor/autoload.php';


use App\Models\User;

$post = User::getInstance();
if (!isset($_GET['id'])) {
    # code...
    echo json_encode([
        "error" => "id must be required"
    ]);
    return ;
}
$id = $_GET['id'];

$data = $post->gets($id, 0);

echo json_encode($data);

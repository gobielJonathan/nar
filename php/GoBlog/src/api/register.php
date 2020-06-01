<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");
require_once '../../vendor/autoload.php';

use App\Models\User;
use Util\Responser;

if(
    $_SERVER['REQUEST_METHOD'] != "POST"
){
    echo Responser::response([
        "error" => "method must be post"
    ]);
    return;
}
if (
    !isset($_POST['fullname']) ||
    !isset($_POST['username']) ||
    !isset($_POST['password'])
) {
    # code...
    echo Responser::response([
        "error" => [
            "username" => "Username must be required",
            "password" => "Password must be required",
            "fullname" => "Fullname must be required"
        ]
    ]);
    return;
}

$user = User::getInstance();
$fullname = $_POST['fullname'];
$username = $_POST['username'];
$password  = $_POST['password'];

$res =  $user->add([
    "fullname" => $fullname,
    "username" => $username,
    "password" => $password
]);

if($res == 1){
    echo Responser::response([
        "status" => true,
    ]);
    return;
}
echo Responser::response([
    "status" => $res
]);
return;

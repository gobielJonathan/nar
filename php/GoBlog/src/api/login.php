<?php


require_once '../../vendor/autoload.php';

use App\Models\Auth;
use Util\Responser;

if (
    !isset($_POST['username']) ||
    !isset($_POST['password'])
) {
    # code...
    echo Responser::response([
        "error" => [
            "username" => "Username must be required",
            "password" => "Password must be required"
        ]
    ]);
    return;
}

$auth = Auth::getInstance();
$username = $_POST['username'];
$password  = $_POST['password'];

echo Responser::response($auth->check($username, $password));

<?php

require_once '../../vendor/autoload.php';

use App\Models\Auth;
use Util\Responser;

$id = $_GET['id'];

if (
    !isset($id)
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

echo Responser::response($auth->getFollow($id));

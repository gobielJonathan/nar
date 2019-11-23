<?php

require_once '../../vendor/autoload.php';

use App\Models\Auth;
use Util\Responser;

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    # code...
    echo Responser::response([
        "error" => "must be post method"
    ]);
    return;
}

if(!isset($_POST['email'])){
    echo Responser::response([
        "email" => "email must be required"
    ]);
    return;
}

$email = $_POST['email'];

$auth = Auth::getInstance();
echo $auth->forgetPassword($email);

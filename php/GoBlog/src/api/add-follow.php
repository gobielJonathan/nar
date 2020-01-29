<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

require_once '../../vendor/autoload.php';

use App\Models\Auth;
use Util\Responser;

$follower_id = $_POST['follower_id'];
$followed_id = $_POST['followed_id'];

if (
    !isset($followed_id) || 
    !isset($follower_id)
) {
    # code...
    echo Responser::response([
        "error" => "follower id or followed id must be required"
    ]);
    return;
}

$auth = Auth::getInstance();

echo Responser::response($auth->addFollow($follower_id, $followed_id));

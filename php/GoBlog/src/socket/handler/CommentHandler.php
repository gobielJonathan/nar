<?php

namespace Socket\Handler;


date_default_timezone_set("Asia/Jakarta");

require_once dirname(__DIR__) . "/../../vendor/autoload.php";

class CommentHandler extends SocketHandler
{
    public function newConnectionACK($client_ip_address)
    {
        $message = 'New client ' . $client_ip_address . ' joined';


        $comment = "";

        $messageArray = array('message' => $message, 'key' => 'posts', "posts" => $comment);

        $ACK = $this->seal(json_encode($messageArray));
        return $ACK;
    }

    public function saveDataToDatabase($data)
    
    {
        Post::getInstance()->add($data);

        return $this->seal(json_encode($data));
    }
}

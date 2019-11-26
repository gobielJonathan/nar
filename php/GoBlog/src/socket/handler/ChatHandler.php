<?php

namespace Socket\Handler;

date_default_timezone_set("Asia/Jakarta");

use App\Models\Chat;

require_once dirname(__DIR__) . "/../../vendor/autoload.php";

class ChatHandler extends SocketHandler
{
	public function newConnectionACK($client_ip_address)
	{
		$message = 'New client ' . $client_ip_address . ' joined';

		$chat = Chat::getInstance();

		$messageArray = array('message' => $message, 'key' => 'chats', "chats" => $chat->gets("", 1));

		$ACK = $this->seal(json_encode($messageArray));
		return $ACK;
	}

	public function saveDataToDatabase($data)
	{
		Chat::getInstance()->add([
			"user_id" => $data['id'],
			"message" => $data['content']
		]);
		$now =  getdate();
		$data['key'] = "chats";
		$data['created_at'] = sprintf("%d-%d-%d %d:%d:%d", $now['year'], $now['month'], $now['mday'], $now['hours'], $now['minutes'], $now['seconds']);

		return $this->seal(json_encode($data));
	}
	
}

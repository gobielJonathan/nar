<?php

namespace Socket;

require_once dirname(__DIR__) . "/../vendor/autoload.php";

use Socket\Handler\ChatHandler;
new ChatSocket;

class ChatSocket
{
    const HOST_NAME = "localhost";
    const PORT = "8090";
    private $chatHandler;
    private $clientSocketArray;
    private $socketResource;

    public function __construct()
    {
        $this->chatHandler = new ChatHandler;
        $this->onOpen();
        $this->onMessage();
    }

    public function __destruct()
    {
        $this->onClose();
    }

    public function onOpen()
    {
        $this->socketResource = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        socket_set_option($this->socketResource, SOL_SOCKET, SO_REUSEADDR, 1);
        socket_bind($this->socketResource, 0, SELF::PORT);
        socket_listen($this->socketResource);

        $this->clientSocketArray = array($this->socketResource);
    }

    public function onMessage()
    {
        while (true) {
            $newSocketArray = $this->clientSocketArray;
            socket_select($newSocketArray, $null, $null, 0, 10);

            if (in_array($this->socketResource, $newSocketArray)) {
                $newSocket = socket_accept($this->socketResource);
                $this->clientSocketArray[] = $newSocket;
                
                $header = socket_read($newSocket, 1024);
                $this->chatHandler->doHandshake($header, $newSocket, SELF::HOST_NAME, SELF::PORT);

                socket_getpeername($newSocket, $client_ip_address);
                $connectionACK = $this->chatHandler->newConnectionACK($client_ip_address);

                $this->chatHandler->send($newSocket, $connectionACK);

                $newSocketIndex = array_search($this->socketResource, $newSocketArray);
                unset($newSocketArray[$newSocketIndex]);
            }

            foreach ($newSocketArray as $newSocketArrayResource) {
                /** 
                 * when success
                 * retrieve chat from client
                 */
                while (socket_recv($newSocketArrayResource, $socketData, 1024, 0) >= 1) {
                    $socketMessage = $this->chatHandler->unseal($socketData);

                    $messageObj = json_decode($socketMessage, true);


                    if ($messageObj) {
                        # code...
                        $data = $this->chatHandler->saveDataToDatabase($messageObj);

                        foreach ($this->clientSocketArray as $socket) {
                            # code...
                                $this->chatHandler->send($socket, $data);
                        }
                    }
                    
                    break 2;
                }

                $socketData = socket_read($newSocketArrayResource, 1024, PHP_NORMAL_READ);

                if ($socketData === false) {
                    socket_getpeername($newSocketArrayResource, $client_ip_address);
                    $connectionACK = $this->chatHandler->connectionDisconnectACK($client_ip_address);
                    $this->chatHandler->send($this->clientSocketArray, $connectionACK);
                    $newSocketIndex = array_search($newSocketArrayResource, $this->clientSocketArray);
                    unset($this->clientSocketArray[$newSocketIndex]);
                }
            }
        }
    }
    public function onClose()
    {
        socket_close($this->socketResource);
    }
    public function onError()
    {
        socket_last_error($this->socketResource);
     }
}


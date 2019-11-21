<?php

namespace Util;

class Responser
{
    public static function response($data)
    {
        return json_encode(
            [
                "data" => $data
            ]
        );
    }
}

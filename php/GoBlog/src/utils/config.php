<?php

namespace Util;

class Config
{

    public static function all()
    {
        $root = dirname(dirname(dirname(__FILE__)));
        $content = file_get_contents($root . "\.env.json", "r");
        return json_decode($content, true);
    }
}

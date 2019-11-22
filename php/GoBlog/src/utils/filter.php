<?php

namespace Util;

class Filter
{

    public static function getParams($params)
    {

        $filterParams = array_filter(
            $params,
            function ($key) {
                return $key !== "page";
            },
            ARRAY_FILTER_USE_KEY
        );

        $params = "";

        foreach ($filterParams as $key => $value) {
            # code...
            $params .= $key . "=" . $value . "&";
        }
        return $params;
    }
}

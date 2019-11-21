<?php

namespace Util;

class Pagination
{
    public static function paginate($page, $total_rows, $records_per_page, $page_url)
    {
        $paging_arr = array();
        $paging_arr["first"] = $page > 1 ? "{$page_url}page=1" : "";
        $total_pages = ceil($total_rows / $records_per_page);
        $range = 1;
        $initial_num = $page - $range;
        $condition_limit_num = ($page + $range)  + 1;
        $paging_arr['pages'] = array();
        $page_count = 0;
        for ($x = $initial_num; $x < $condition_limit_num; $x++) {
            if (($x > 0) && ($x <= $total_pages)) {
                $paging_arr['pages'][$page_count]["page"] = $x;
                $paging_arr['pages'][$page_count]["url"] = "{$page_url}page={$x}";
                $paging_arr['pages'][$page_count]["current_page"] = $x == $page;
                $page_count++;
            }
        }
        $paging_arr["last"] = $page < $total_pages ? "{$page_url}page={$total_pages}" : "";
        return $paging_arr;
    }
}

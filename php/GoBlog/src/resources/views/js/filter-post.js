import { fetch , clearPost} from "./post.js";

let timer = null

$(document).ready(function () {
    $("#filter-post").keypress(function () {
        clearTimeout(timer)

        timer = setTimeout(() => {
           clearPost()
            fetch($(this).val())
        }, 500);
    })
 })
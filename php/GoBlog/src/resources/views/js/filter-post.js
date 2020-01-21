import { fetch, clearPost } from "./post.js";

let timer = null

$(document).ready(function () {
    $("#filter-post").keypress(function () {
        clearTimeout(timer)

        timer = setTimeout(() => {
            window.location.search = `?q=${$(this).val()}`
            clearPost()
            fetch() 
        }, 800);
    })
})
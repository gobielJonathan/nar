import PostTemplate from "./template/post_template.js";
import { BASE_API_URL } from "./constant.js";
import { getFollow } from "./auth.js";

let isFetching = true;
let currentPage = 1

fetch()

export function fetch() {

    let query = ""
    if (window.location.search) {
        query = new URLSearchParams(window.location.search)
        query = query.get('q')
    }
    let postsHTML = "";

    isFetching = true

    $(".loader").show()

    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null

    const api = `http://${BASE_API_URL}/post.php?page=${currentPage}&q=${query || ""}&user_id=${user ? user.id : 0}`;

    $.getJSON(api, function (res) {
        const posts = res.data.data
        const paginate = res.data.paginate

        if (paginate.length != 0) {
            currentPage = paginate.pages.findIndex(p => p.current_page)

            currentPage = paginate.pages[currentPage].page + 1
        }

        posts.forEach(post => {
            postsHTML += PostTemplate(post);
        });

        $(".loader").hide()
        $(".posts").append(postsHTML);

        isFetching = false;
    })

}

export function clearPost() {
    $(".posts").empty()
}

$("#create-post-form").submit(function (event) {
    event.preventDefault()
    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null

    if (!user) {
        window.location.href = "/src/resources/views/auth";
    } else {
        const payload = {
            title: event.target.title.value,
            content: event.target.content.value,
            user_id: user.id
        }
        $.post(`http://${BASE_API_URL}/create-post.php`, payload, function () {
            currentPage = 1
            window.location.search = "";
            clearPost()
            fetch()
        })
    }

})


$(window).scroll(function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        if (!isFetching)
            fetch()
    }
})

$(".posts").on('click', $("#follow-btn"), function (event) {
    const idElement = $(event.target).attr('id')

    switch (idElement) {
        case "follow-btn":
            event.preventDefault()
            const toBeFollowId = $(event.target).data('id')

            const user = JSON.parse(sessionStorage.getItem('auth'))


            const payload = {
                followed_id: user.id,
                follower_id: toBeFollowId
            }

            $.post(`http://${BASE_API_URL}/add-follow.php`, payload, function () {
                $(`[data-id=${toBeFollowId}]`).remove()
                getFollow()
            })
            break;

        default:
            break;
    }

})

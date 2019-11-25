import PostTemplate from "./template/post_template.js";

let isFetching = true;
let currentPage = 1

fetch()

export function fetch(query) {
    let postsHTML = "";

    isFetching = true

    $(".loader").show()

    const api = `http://localhost:8000/src/api/post.php?page=${currentPage}&q=${query || ""}`;

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

export function clearPost(){
    $(".posts").empty()
}

$(window).scroll(function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        if (!isFetching)
            fetch()
    }
})

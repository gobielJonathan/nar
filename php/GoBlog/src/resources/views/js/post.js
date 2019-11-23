import PostTemplate from "./template/post_template.js";

let isFetching = true;
let currentPage = 1

fetch()

function fetch() {
    let postsHTML = "";

    isFetching = true

    $(".loader").show()

    const api = "http://localhost:8000/src/api/post.php?page="+ (currentPage );

    $.getJSON(api, function (res) {
        const posts = res.data.data
        currentPage =  res.data.paginate.pages.findIndex(p => p.current_page)
        currentPage = res.data.paginate.pages[currentPage].page + 1

        posts.forEach(post => {
            postsHTML += PostTemplate(post);
        });

        $(".loader").hide()
        $(".posts").append(postsHTML);

        isFetching = false;
    })

}

$(window).scroll(function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        if (!isFetching)
            fetch()
    }
})
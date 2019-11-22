import PostTemplate from "./template/post_template.js";
import PaginateTemplate from "./template/paginate_template.js";


fetch()
function fetch(api) {
    let postsHTML = "";

    $(".posts").empty()
    $(".loader").show()

    if (!api) {
        const page = parseInt(location.hash[1]) || 1
        api = "http://localhost:8000/src/api/post.php?page=" + page
    }

    $.getJSON(api, function (res) {
        const posts = res.data.data
        const paginate = res.data.paginate

        posts.forEach(post => {
            postsHTML += PostTemplate(post);
        });


        const paginateHTML = PaginateTemplate(paginate)

        $(".loader").hide()
        $(".posts").append(postsHTML);

        $(".posts").append(paginateHTML);
        $(".page-link").click(redirectTo)

    })

}
function redirectTo(e) {
    e.preventDefault()
    const url = $(e.target).attr("href")
    const page = new URLSearchParams(new URL(url).search).get("page")
    location.hash = page
    fetch(url)
}
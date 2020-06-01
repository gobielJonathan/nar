import CommentTemplate from './template/comment_template.js'
import { BASE_API_URL } from './constant.js'
import PostTemplate from './template/post_template.js'

let url = new URLSearchParams(window.location.search)

const id = url.get("id")
const post = url.get('data')

let page = 1

if (id != null) {
    fetch()
}

$(document).ready(function () {
    if (post) {
        const postTemplate = PostTemplate(JSON.parse(post))
        $(".posts").html(postTemplate)
    }
})

function fetch() {
    $.getJSON(`http://${BASE_API_URL}/get-comment.php?page=${page}&id=${id}`, function (data) {
        const comments = data.data.data
        const paginate = data.data.paginate
        createCommentHTML(comments)
    })
}

function createCommentHTML(comments) {

    for (const id in comments) {
        const commentData = comments[id].data

        const html = CommentTemplate(commentData)
        $("#comments").append(html)
        createChildCommentHTML(comments[id], id)
    }
}

function createChildCommentHTML(comment, parentKey) {
    for (const id in comment.child) {

        const commentData = comment.child[id]
        const html = CommentTemplate(commentData)

        $(`#post${parentKey}`).append("<div class=comment-container></div>")

        $(`#post${parentKey} > .comment-container`).append(html)

        createChildCommentHTML(comment.child[id], id)

        if ($(`[id='post${id}']`).length > 1)
            $(`[id='post${id}']`).last().remove();


        // console.log('---------------------');
        // console.log(comment.child[key]);
    }
}
$(".gedf-main").on('click', $(".comment-form"), function (event) {
    event.preventDefault()
    
    const classElement = $(event.target).parent().attr('class')
    
    if (classElement.includes("comment-form")) {
        createComment($(event.target).parent())
    }
})

export function createComment(form) {
    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null

    if (!user)
        window.location.href = "/src/resources/views/auth"

    const parent_id = form.data("parent-comment") || null

    const content = parent_id ? $(form).find(`input[id='input-comment-${parent_id}']`) : $(form).find(`input[id='input-comment']`)

    const payload = {
        content: content.val(),
        post_id: id,
        parent_id,
        user_id: user.id
    }

    $.post(`http://${BASE_API_URL}/create-comment.php`, payload, function () {
        location.reload()
    })

}
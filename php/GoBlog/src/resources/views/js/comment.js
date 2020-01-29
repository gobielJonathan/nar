import CommentTemplate from './template/comment_template.js'
import { BASE_API_URL } from './constant.js'

let url = new URLSearchParams(window.location.search)

const id = url.get("id")
let page = 1

if (id != null) {
    fetch()
}

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

        if($(`[id='post${id}']`).length >1)
            $(`[id='post${id}']`).last().remove();


        // console.log('---------------------');
        // console.log(comment.child[key]);
    }
}
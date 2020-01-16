import CommentTemplate from './template/comment_template.js'

let url = new URLSearchParams(window.location.search)

const id = url.get("id")
let page = 1

if (id != null) {
    console.log(id)
    fetch()
}

function fetch() {
    $.getJSON(`http://localhost:8000/src/api/get-comment.php?page=${page}&id=${id}`, function (data) {
        const comments = data.data.data
        const paginate = data.data.paginate
        createCommentHTML(comments)
    })
}

function createCommentHTML(comments) {

    for (const key in comments) {
        const commentData = comments[key].data
        const html = CommentTemplate(commentData)
        $("#comments").append(html)
        createChildCommentHTML(comments[key], key)
    }
}

function createChildCommentHTML(comment, parentKey) {
    for (const key in comment.child) {
    
        const commentData = comment.child[key]
        const html = CommentTemplate(commentData)
       
        $(`#post${parentKey}`).append("<div class=comment-container></div>")
        $(`#post${parentKey} > .comment-container`).append(html)    

        console.log(comment.child[key]);

        createChildCommentHTML(comment.child[key], key)

        console.log('---------------------');
        console.log(comment.child[key]);
    }
}
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
        createChildCommentHTML(comments[key])
    }
}

function createChildCommentHTML(comment) {
    for (const key in comment) {
    
        if (key != "data") {
            const key = comment[key].data.id
            const commentData = comment[key].data 
            const html = CommentTemplate(commentData)
            $(`#post${key}`).append(html)
            
            createChildCommentHTML(comment[key])
        }
    }
}
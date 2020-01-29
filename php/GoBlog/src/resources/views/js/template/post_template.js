export default function PostTemplate(data) {
    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null
 
    return `
        <div class="card gedf-card my-2">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="mr-2">
                            <img class="rounded-circle" width="45" src="${data.picture_path}" alt="">
                        </div>
                        <div class="ml-2">
                            <div class="h5 m-0">@${data.username}</div>
                            <div class="h7 text-muted">${data.fullname}</div>
                        </div>
                    </div>
                    ${
                        user && data.already_follow == "0" && data.user_id != user.id ?
                        `<a data-id=${data.user_id} id=follow-btn class='follow-btn btn btn-primary ml-auto text-white'>Follow<a>` : ``
                    }
                </div>

            </div>
            <div class="card-body">
                <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>
                ${
                    new Date(new Date().getTime() - new Date(data.created_at).getTime()).getDate() > 0 ? 
                    new Date(new Date().getTime() - new Date(data.created_at).getTime()).getDate() : ""
                }days 
                ${
                    new Date(new Date().getTime() - new Date(data.created_at).getTime()).getMinutes()
                } minutes</div>
                <a class="card-link" href="comment?id=${data.id}">
                    <h5 class="card-title">${data.title}</h5>
                </a>

                <p class="card-text">
                    ${data.content.substring(0,300)}
                    ${data.content.length > 300 ? "..." : ""}
                </p>
            </div>
        </div>
    `
}
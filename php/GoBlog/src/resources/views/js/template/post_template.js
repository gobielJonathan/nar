export default function PostTemplate(data) {
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
                <div>
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                            <a class="dropdown-item" href="#">Save</a>
                            <a class="dropdown-item" href="#">Hide</a>
                            <a class="dropdown-item" href="#">Report</a>
                        </div>
                    </div>
                </div>
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
            <a class="card-link" href="#">
                <h5 class="card-title">${data.title}</h5>
            </a>

            <p class="card-text">
                ${data.content.substring(0,300)}
                ${data.content.length > 300 ? "..." : ""}
            </p>
        </div>
        <div class="card-footer">
            <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
        </div>
    </div>
    `
}
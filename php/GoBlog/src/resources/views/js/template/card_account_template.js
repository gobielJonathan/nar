export default function CardAccount(data) {
    return `<div class="col-md-3 position-sticky" style="top:10px;align-self: flex-start;">
        <div class="card">
            <div class="card-body">
                <div class="h5 d-flex align-items-center">
                    <span>
                        <img class="rounded-circle" width=24 height=24 src="${data.picture_path}" alt="">
                        @${data.username}</span>

                    <div class="dropdown ml-auto">
                        <button class="btn btn-link" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                            <a class="dropdown-item" id="logout">Logout</a>
                            <a class="dropdown-item" href="profile">Profile</a>
                        </div>
                    </div>
                </div>
                <div class="h7 text-muted">Fullname : ${data.fullname}</div>
                <div class="h7">${data.status}
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="h6 text-muted">Followers</div>
                    <div class="h5">${data.follower}</div>
                </li>
                <li class="list-group-item">
                    <div class="h6 text-muted">Following</div>
                    <div class="h5">${data.following}</div>
                </li>
            </ul>
        </div>
    </div>`
}
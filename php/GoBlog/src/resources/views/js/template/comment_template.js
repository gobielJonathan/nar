
export default function CommentTempate(data) {

    return `
        <div class="comment-container ml-4" id="post${data.id}">
            <div class="comments p-2 d-flex">

                <div class="comment-avatar mr-2 align-self-center">
                    <img src="${data.picture_path}" alt="" class="img-fluid rounded-circle">
                </div>

                <div class="comment-detail rounded p-4">
                    <div class="comment-detail-header d-flex">
                        <h5 class="text-capitalize"><b>${data.username}</b></h5>
                        <p class="ml-auto">${data.created_at}</p>
                    </div>

                    <div class="comment-detail-content">
                        <article>
                            ${data.content}
                        </article>

                        <div class="comment-action d-flex mt-2">
                            <button type="button" class="btn btn-primary rounded" data-toggle="collapse" data-target="#form${data.id}">
                                <i class="fa fa-reply" aria-hidden="true"></i>
                                REPLY
                            </button>
                        </div>

                        <form action="" class="my-2 collapse" id="form${data.id}">

                            <div class="form-group">
                                <label for="input-comment" class="font-weight-bold">Your Comment</label>
                                <input type="text" name="" id="input-comment" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>
        
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    `
}
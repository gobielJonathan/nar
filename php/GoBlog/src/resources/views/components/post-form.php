<div class="card gedf-card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                    a publication</a>
            </li>
        </ul>
    </div>
    <div class="card-body">
        <form id="create-post-form" method="post">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                    <div class="form-group">
                        <label class="sr-only" for="message">post</label>
                        <input type="hidden" name="user_id">
                        <input type="text" class="form-control mb-2" name="title" required id="" aria-describedby="helpId" placeholder="Title">
                        <textarea class="form-control" id="message" name="content" required rows="3" placeholder="What are you thinking?"></textarea>
                    </div>
                </div>
            </div>
            <div class="btn-toolbar justify-content-between">
                <div class="btn-group">
                    <button type="submit" class="btn btn-primary">Share</button>
                </div>
                <div class="btn-group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-globe"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="#"><i class="fa fa-globe"></i> Public</a>
                        <a class="dropdown-item" href="#"><i class="fa fa-users"></i> Friends</a>
                        <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Just me</a>
                    </div>
                </div>
            </div>

        </form>
    </div>
</div>
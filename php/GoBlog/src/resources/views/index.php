<link rel="stylesheet" href="../../../public/css/bootstrap.min.css">
<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="../../../public/assets/font_awesome/css/font-awesome.min.css">
<title>Home</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<nav class="navbar navbar-light bg-white">
    <a href="#" class="navbar-brand">
        <h4>
            <img src="../../../public/assets/icon.svg" alt="">
            <span>Gorum</span>
        </h4>
    </a>
    <form class="form-inline">
        <div class="input-group">
            <input type="text" class="form-control" aria-label="Recipient's username" placeholder="Search anything..." aria-describedby="button-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" id="button-addon2">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    </form>
</nav>


<div class="container-fluid gedf-wrapper">
    <div class="row">
        <div class="col-md-3 position-sticky" style="top:10px;align-self: flex-start;">
            <div class="card">
                <div class="card-body">
                    <div class="h5 d-flex align-items-center">
                        <span>@LeeCross</span>

                        <div class="dropdown ml-auto">
                            <button class="btn btn-link" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                <a class="dropdown-item" onclick="logout()">Logout</a>
                                <a class="dropdown-item" href="profile">Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="h7 text-muted">Fullname : Miracles Lee Cross</div>
                    <div class="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                        etc.
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="h6 text-muted">Followers</div>
                        <div class="h5">5.2342</div>
                    </li>
                    <li class="list-group-item">
                        <div class="h6 text-muted">Following</div>
                        <div class="h5">6758</div>
                    </li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>

        <div class="col-md-6 gedf-main">
            <?php include  "./components/post-form.php"; ?>
            <div class="posts"></div>
            <?php include  "./components/loading.php"; ?>

            <!-- post content will be retrieve from ajax  -->
        </div>

        <div class="col-md-3">
            <div class="card gedf-card mb-2">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            <div class="card gedf-card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include "components/chat.php"?>

<script src="../../../public/js/jquery.js"></script>
<script src="../../../public/js/popper.min.js"></script>
<script src="../../../public/js/bootstrap.min.js"></script>
<script src="js/post.js" type="module"></script>

<?php 
    func
?>
<script>
    function logout() {
        // sessionStorage.clear()
        // location.reload()
    }
</script>
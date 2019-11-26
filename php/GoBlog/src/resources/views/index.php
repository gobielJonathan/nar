<link rel="stylesheet" href="../../../public/css/bootstrap.min.css">
<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="../../../public/assets/font_awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="../../../public/css/snackbar.min.css">


<title>Home</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<?php include "components/nav.php" ?>

<div class="container-fluid gedf-wrapper">
    <div class="row" id="main-row">
      
        <div class="col-md-9 gedf-main">
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
<script src="../../../public/js/sweetalert.min.js"></script>
<script src="../../../public/js/snackbar.min.js"></script>

<script src="js/post.js" type="module"></script>
<script src="js/auth.js" type="module"></script>
<script src="js/filter-post.js" type="module"></script>

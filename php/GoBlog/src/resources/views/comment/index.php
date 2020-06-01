<link rel="stylesheet" href="../../../public/css/bootstrap.min.css">
<link rel="stylesheet" href="comment/index.css">
<link rel="stylesheet" href="../../../public/assets/font_awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="../../../public/css/snackbar.min.css">


<title>Home</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<?php include "../components/nav.php" ?>

<div class="container-fluid gedf-wrapper">
    <div class="row" id="main-row">

        <div class="col-md-9 gedf-main main">
            <!-- <?php include  "../components/loading.php"; ?> -->

            <!-- post content will be retrieve from ajax  -->

            <div class="posts"></div>


            <div class="comments p-2">
                <form action="" class="my-2 comment-form">

                    <div class="form-group">
                        <label for="input-comment" class="font-weight-bold">Your Comment</label>
                        <input type="text" name="content" id="input-comment" class="form-control" placeholder="" aria-describedby="helpId">
                    </div>

                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>

            <div id="comments"></div>

        </div>

    </div>
</div>



<?php include "../components/chat.php" ?>

<script src="../../../public/js/jquery.js"></script>
<script src="../../../public/js/popper.min.js"></script>
<script src="../../../public/js/bootstrap.min.js"></script>
<script src="../../../public/js/sweetalert.min.js"></script>
<script src="../../../public/js/snackbar.min.js"></script>

<script src="js/comment.js" type="module"></script>
<script src="js/auth.js" type="module"></script>
<!-- <script src="js/filter-post.js" type="module"></script> -->

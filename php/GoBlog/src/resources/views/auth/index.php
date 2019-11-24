<!DOCTYPE html>
<html lang="en">

<head>
	<title>Authenticate</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../../../public/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../../../public/assets/font_awesome/css/font-awesome.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="auth/vendor/animate/animate.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="auth/vendor/css-hamburgers/hamburgers.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="auth/vendor/select2/select2.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="auth/css/util.css">
	<link rel="stylesheet" type="text/css" href="auth/css/main.css">
	<!--===============================================================================================-->
</head>

<body>

	<script>

		if (sessionStorage.getItem("auth") != null) {
			location.href="index.php"
		}

	</script>

	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<a href="index.php" class="login100-pic js-tilt" data-tilt>
					<img src="../../../public/assets/logo.svg" alt="IMG">
				</a>

				<div>
					<nav>
						<div class="nav nav-tabs" id="nav-tab" role="tablist">
							<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-login" role="tab" aria-controls="nav-login" aria-selected="true">Login</a>
							<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-register" role="tab" aria-controls="nav-register" aria-selected="false">Register</a>
						</div>
					</nav>
					<div class="tab-content" id="nav-tabContent">
						<?php include 'login.php'; ?>
						<?php include 'register.php'; ?>
					</div>
				</div>


			</div>
		</div>
	</div>




	<!--===============================================================================================-->
	<script src="../../../public/js/jquery.js"></script>
	<!--===============================================================================================-->
	<script src="../../../public/js/popper.min.js"></script>
	<script src="../../../public/js/bootstrap.min.js"></script>
	<script src="../../../public/js/sweetalert.min.js"></script>
	<!--===============================================================================================-->
	<script src="auth/vendor/select2/select2.min.js"></script>
	<!--===============================================================================================-->
	<script src="auth/vendor/tilt/tilt.jquery.min.js"></script>
	<script>
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script>
	<!--===============================================================================================-->
	<script src="auth/js/main.js" type="module"></script>

</body>

</html>
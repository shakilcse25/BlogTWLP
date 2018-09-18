<?php ob_start(); ?>
<?php include '../lib/Session.php'; ?>

<?php
	Session::init();
?>

<?php include '../config/config.php' ?>
<?php include '../lib/Database.php' ?>
<?php include '../helpers/Format.php' ?>
<?php $db = new Database();
$fm = new Format(); ?>


<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>Login</title>
    <link rel="stylesheet" type="text/css" href="css/stylelogin.css" media="screen" />
</head>
<body>
<div class="container">
	<section id="content">

<?php   
	if (isset($_POST['submit'])) {
		$password = md5($_POST['password']);
		$username = mysqli_real_escape_string($db->link,$fm->validation($_POST['username']));
		$password = mysqli_real_escape_string($db->link,$fm->validation($password));

		$sql = "select * from tbl_user where username='$username' and password='$password'";
		$result = $db->select($sql);
		if($result){
				$result= $result->fetch_assoc();
				Session::set("login", true);
				Session::set("username", $result['username']);
				Session::set("userId", $result['id']);
				Session::set("userRole", $result['role']);
				Session::set("userName", $result['name']);
				header("Location:index.php");
		}
		else {
			echo "<span style='color:red;font-size:18px;'> Username or password didn't match!<span>";
		}
	}
?>

		<form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
			<h1>Admin Login</h1>
			<div>
				<input type="text" placeholder="Username" required="" name="username"/>
			</div>
			<div>
				<input type="password" placeholder="Password" required="" name="password"/>
			</div>
			<div>
				<input type="submit" value="Log in" name="submit"/>
			</div>
		</form><!-- form -->
		<div class="button">
			<a href="#">Training with live project</a>
		</div><!-- button -->
	</section><!-- content -->
</div><!-- container -->
</body>
</html>
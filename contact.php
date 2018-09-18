<?php include 'inc/header.php' ?>

	<div class="contentsection contemplete clear">
		<div class="maincontent clear">
			<div class="about">

<?php 
	if (isset($_GET['msg'])){
		if($_GET['msg']=='success'){
			echo "<p class='success'>Your Message sent Successfully!</p>";
		}
		else if ($_GET['msg'] == 'error') {
			echo "<p class='error'>Unfortunately your Message not sent!</p>";
		}
	}

?>


				<h2>Contact us</h2>


			<?php
				$emailErr = '';
				if (isset($_POST['submit'])) {
					$firstname = $fm->validation($_POST['firstname']);
					$lastname = $fm->validation($_POST['lastname']);
					$email = $fm->validation($_POST['email']);
					$msg = $fm->validation($_POST['msg']);
					if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
						$emailErr = "Invalid email format";
					} else {
						$sql = "insert into tbl_contact(firstname,lastname,email,message) values('$firstname','$lastname','$email','$msg')";
						$result = $db->insert($sql);
						if ($result) {
							header("Location:contact.php?msg=success");
						} else {
							header("Location:contact.php?msg=error");
						}
					}
				}

			?>

		<span class="error"><?php echo $emailErr; ?></span>

			<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
				<table>
				<tr>
					<td>Your First Name:</td>
					<td>
					<input type="text" name="firstname" placeholder="Enter first name" required="1"/>
					</td>
				</tr>
				<tr>
					<td>Your Last Name:</td>
					<td>
					<input type="text" name="lastname" placeholder="Enter Last name" required="1"/>
					</td>
				</tr>
				
				<tr>
					<td>Your Email Address:</td>
					<td>
					<input type="text" name="email" placeholder="Enter Email Address" required="1"/>
					</td>
				</tr>
				<tr>
					<td>Your Message:</td>
					<td>
					<textarea name="msg"></textarea>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
					<input type="submit" name="submit" value="Submit"/>
					</td>
				</tr>
		</table>
	<form>				
 </div>

		</div>

		<?php include 'inc/sidebar.php' ?>

	</div>

<?php include 'inc/footer.php' ?>
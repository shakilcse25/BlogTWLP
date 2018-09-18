<?php include 'inc/header.php' ?>

	<div class="contentsection contemplete clear">
		<div class="maincontent clear">
			<div class="about">

<!-- BY PAGE ID SELECT THE SPECIFIC PAGE DATABASE -->
        <?php
        if (isset($_GET['id'])) {
            $pageid = $_GET['id'];
        }
            $sql = "select * from tbl_page where id=$pageid";
            $data = $db->select($sql);
            if(!$data){
                header("Location:404.php");
            }
            $data = $data->fetch_assoc();
        ?>


				<h2><?php echo $data['title'];  ?></h2>
	
				<p style="text-align:justify;"><?php echo $data['body']; ?></p>
	</div>

		</div>

		<?php include 'inc/sidebar.php' ?>
	</div>

<?php include 'inc/footer.php' ?>
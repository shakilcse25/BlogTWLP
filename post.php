<?php include 'inc/header.php' ?>

<!-- FIND THE SPECIFIC POST ID VARIABLE FROM GET METHOD -->
<?php
	if (!isset($_GET['id']) || $_GET['id'] == null) {
		header("Location: 404.php");
	}
	else{
		$id = $_GET['id'];
	}
?>


	<div class="contentsection contemplete clear">
		<div class="maincontent clear">
			<div class="about">

<!-- SELECT POST BY THIS SPECIFIC ID -->
			<?php   
				$sql = "select * from tbl_post where id = $id";
				$data =$db->select($sql);
				$data = $data->fetch_assoc();

				if($data){

			?>
<!-- FETCH ALL THE DATA			 -->

				<h2><a href=""> <?php echo $data['title']; ?> </a></h2>
				<h4> <?php echo $fm->formatDate($data['date']); ?> - By <a href="#"> <?php echo $data['author']; ?> </a></h4>
				 <a href="#"><img src="admin/<?php echo $data['image']; ?>" alt="<?php echo $data['title']; ?>"/></a>
				<p>
					<?php echo $data['body']; ?>
				</p>
				



				<div class="relatedpost clear">
					<h2>Related articles</h2>

<!-- FIND ALL THE RELATED CATID -->
					<?php
					   	$catid = $data['cat'];
						$qrycat = "select * from tbl_post where cat = $catid limit 3";
						$data = $db->select($qrycat);if($data){
							while($value = $data->fetch_assoc()){

								if ($id == $value['id']) {
									continue;
								}

					?>

					<a href="post.php?id=<?php echo $value['id']; ?>"><img src="admin/<?php echo $value['image']; ?>" alt="<?php echo $value['title']; ?>"/></a>

					<?php   
							}
						}
						else {
							echo "No Related Post Available.";
						}
					
					?>

				</div>


				<?php
					}
					else{
						header("Location:404.php");
					}   
				?>
	</div>

		</div>
		<?php include 'inc/sidebar.php' ?>
	</div>

<?php include 'inc/footer.php' ?>


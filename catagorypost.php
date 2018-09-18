<?php include 'inc/header.php' ?>

	<div class="contentsection contemplete clear">
		<div class="maincontent clear">


<!-- PAGINATION STARTING PAGE -->

		<?php
			$perpage = 3;
			if(isset($_GET['page'])){
				$page = $_GET['page'];
			}
			else{
				$page = 1;
			}
			$start_page = ($page-1) * $perpage;
  
            if(isset($_GET['catagory'])){
				$catagory = $_GET['catagory'];
			}
        ?>



<!-- SQL POST LIMIT PER PAGE AND SELECT BASED ON CATAGORY-->

		<?php
		
		$sql = "select * from tbl_post where cat=$catagory limit $start_page , $perpage";
		$data = $db->select($sql);

		if($data){
			while ($value = $data->fetch_assoc()) {

		?>

<!-- FETCH ALL THE DATA -->
			<div class="samepost clear">
				<h2><a href=""> <?php echo $value['title']; ?> </a></h2>
				<h4> <?php echo $fm->formatDate($value['date']); ?> - By <a href="#"> <?php echo $value['author']; ?> </a></h4>
				 <a href="#"><img src="admin/<?php echo $value['image']; ?>" alt="<?php echo $value['title']; ?>"/></a>
				<p>
					<?php echo $fm->textShort($value['body'],250); ?>
				</p>
				<div class="readmore clear">
					<a href="post.php?id=<?php echo $value['id']; ?>">Read More</a>
				</div>
			</div>
			<?php
				}
			?>

<!-- POST COUNT PER PAGE -->
			<?php
				$query = "select * from tbl_post where cat=$catagory";
				$result = $db->select($query);
				$total_rows = mysqli_num_rows($result);
				$total_pages = ceil($total_rows/$perpage);
			?>
				
			<?php echo "<span class='pagination'> <a href='catagorypost.php?catagory=$catagory & page=1'> First Page </a>"; ?>

				<?php
					for ($i=1; $i <= $total_pages; $i++) { 
						echo "<a href='catagorypost.php?catagory=$catagory & page=$i'> $i </a>";
					} 
				?>

			<?php echo "<a href='catagorypost.php?catagory=$catagory & page=$total_pages'> Last Page </a></span>"; ?>

			<?php
				}
				else{
					echo "No Data Available!";
				}
		 	?>
		</div>
		<?php include 'inc/sidebar.php' ?>	
	</div>

		<?php include 'inc/footer.php' ?>	

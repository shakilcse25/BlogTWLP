<div class="sidebar clear">
			<div class="samesidebar clear">
				<h2>Categories</h2>
					<ul>



			<?php
				$sql = "select * from tbl_catagory"; 
				$data = $db->select($sql);

				$cataid=null;
				if (isset($_GET['catagory'])) {
					$cataid=$_GET['catagory'];
				}
				
				if($data){
					while ($value = $data->fetch_assoc()) {
			
			?>

						<li><a href="catagorypost.php?catagory=<?php echo $value['id']; ?>" 
						<?php if ($value['id'] == $cataid) {
							echo " style='color:red'";
						} ?>
						><?php echo $value['name'];  ?></a></li>			
			<?php   
					}
				}
				else{
					echo "No Catagory Yet.";
				}

			?>		
					</ul>
			</div>
			
			<div class="samesidebar clear">
				<h2>Latest articles</h2>




		<?php   
			$qry = "select * from tbl_post order by id desc limit 4";
			$post = $db->select($qry); 
			if($post){
				while ($data = $post->fetch_assoc()) {
					
		?>


					<div class="popular clear">

						<h3><a href="post.php?id=<?php echo $data['id']; ?>"><?php echo $data['title']; ?></a></h3>

						<a href="post.php?id=<?php echo $data['id']; ?>"><img src="admin/<?php echo $data['image'];  ?>" alt="<?php echo $data['title'];  ?>"/></a>
						<p style="text-align:justify;"><?php echo $fm->textShort($data['body'],150);  ?></p>	
					</div>
		<?php   
				}
			}
			else{
				echo "No Latest Post Available.";
			}
		?>			
			</div>
			
		</div>
<?php include 'inc/header.php'  ?>
<?php include 'inc/sidebar.php'  ?>

<!-- DELETE OPERATION SQL AND STATUS -->
<?php
if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$sql = "delete from tbl_post where id=$id";
	$data = $db->delete($sql);
	if ($data) {
		header("Location:postlist.php?del=success");
	} else {
		header("Location:postlist.php?del=error");
	}
}

?>

        <div class="grid_10">
            <div class="box round first grid">
<!-- STATUS ACCORDING TO GET MESSAGE -->
		<?php 
			if (isset($_GET['del'])){
				if ($_GET['del'] == 'success'){
					echo "<p class='success'>Post Deleted successfully.</p>";
				} else if ($_GET['del'] == 'error') {
					echo "<p class='error'>Post Not Deleted.</p>";
				}
			}
			if (isset($_GET['edit'])) {
				if ($_GET['edit'] == 'success') {
					echo "<p class='success'>Post Edited successfully.</p>";
				} else if ($_GET['edit'] == 'error') {
					echo "<p class='error'>Post Not Edited.</p>";
				}
			}
		?>

                <h2>Post List</h2>
                <div class="block">  
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							
							<th  style="text-align:center;" width="5%;">Serial No</th>
							<th  style="text-align:center;" width="15%;">Post Title</th>
							<th  style="text-align:center;" width="30%;">Description</th>
							<th  style="text-align:center;" width="15%;">Category</th>
							<th  style="text-align:center;"  width="20%;">Image</th>
							<th  style="text-align:center;" width="20%;">Action</th>
						</tr>
					</thead>
					<tbody>

<!-- QRY FOR POST JOIN WITH CATAGORY TABLE AND FETCH DATA  -->
						<?php   
							$sql = "select tbl_post.*,tbl_catagory.name from tbl_post join tbl_catagory on tbl_post.cat=tbl_catagory.id order by tbl_post.id desc";
							$data = $db->select($sql);
							if($data){
								$x=0;
								while($value = $data->fetch_assoc()){
									$x++;
						?>

						<tr class="odd gradeX" style="text-align:center;">
							<td><?php  echo $x; ?></td>
							<td><?php echo $value['title']; ?></td>
							<td><?php echo $fm->textShort($value['body'],50); ?></td>
							<td><?php echo $value['name']; ?></td>
							<td class="center">
							<img src="<?php echo $value['image']; ?>" style="width:18%;vertical-align:middle;"  alt="<?php echo $value['image']; ?>">
							</td>
							
							<td>

							<?php if ($user_role == '0' || $user_id == $value['userid']) { ?>
								<a href="postedit.php?id=<?php echo $value['id']; ?>">Edit</a> ||
							<?php } ?>

								<a href="../post.php?id=<?php echo $value['id']; ?>" target="_blank">View</a>

							<?php if ($user_role == '0' || $user_id == $value['userid']) { ?>
								|| <a href="<?php echo $_SERVER['PHP_SELF'] . '?id=' . $value['id']; ?>" onclick="return confirm('Are You Sure to Delete this Post?');">Delete</a>
							<?php } ?>
						
						
							</td>
						</tr>
						<?php   
								}
							}
							else {
								echo "No Post Available.";
							}
						?>

					</tbody>
				</table>
	
               </div>
            </div>
        </div>




<?php include 'inc/footer.php';?>
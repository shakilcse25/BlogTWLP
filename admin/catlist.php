<?php include 'inc/header.php'  ?>
<?php include 'inc/sidebar.php'  ?>
<style>
tr{
	text-align:center;
}
</style>
        <div class="grid_10">
            <div class="box round first grid">

			<?php
				if (isset($_GET['msg'])) {
					if($_GET['msg']=='success'){
						echo "<p class='success'>Data Inserted Successfully!</p>";
					}
					else if($_GET['msg'] == 'error') {
						echo "<p class='error'>Failed to Insert data!</p>";
					}
				}
				if (isset($_GET['edit'])) {
					if ($_GET['edit'] == 'success') {
						echo "<p class='success'>Data Updated Successfully!</p>";
					} elseif ($_GET['edit'] == 'error') {
						echo "<p class='error'>Failed to Insert data!</p>";
					}
				}

				if(isset($_GET['del'])){
					if($_GET['del']=='success'){
						echo "<p class='success'>Data Deleted Successfully!</p>";
					}
					else if($_GET['del']=='error'){
						echo "<p class='error'>Failed to Delete Data!</p>";
					}
				}
			?>



                <h2>Category List</h2>
                <div class="block">        
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							<th>Serial No.</th>
							<th>Category Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>

<!-- SELECT ALL DATA FROM CATAGORY TABLE -->
			<?php
				$sql = "select * from tbl_catagory";
				$data = $db->select($sql);
				if($data){
					while ($value = $data->fetch_assoc()) {

			?>

						<tr class="odd gradeX">
							<td><?php echo $value['id'] ?></td>
							<td><?php echo $value['name'] ?></td>
							<td><a href="<?php echo 'editcat.php'.'?id='.$value['id']; ?>">Edit</a> || <a href="<?php echo 'delete.php'.'?delid='.$value['id']; ?>" onclick="return confirm('Are You Sure to Delete This Catagory?')" >Delete</a></td>
						</tr>
				
			<?php   
					}
				}else {
					echo "No Catagory Listed.";
				}
				
			?>




					</tbody>
				</table>
               </div>
            </div>
        </div>
<?php include 'inc/footer.php'  ?>

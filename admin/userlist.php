<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>

<!-- DELETE OPERATION SQL AND STATUS -->
<?php
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "delete from tbl_user where id=$id";
    $data = $db->delete($sql);
    if ($data) {
        header("Location:userlist.php?del=success");
    } else {
        header("Location:userlist.php?del=error");
    }
}

?>

        <div class="grid_10">
            <div class="box round first grid">
<!-- STATUS ACCORDING TO GET MESSAGE -->
		<?php 
    if (isset($_GET['del'])) {
        if ($_GET['del'] == 'success') {
            echo "<p class='success'>User Deleted successfully.</p>";
        } else if ($_GET['del'] == 'error') {
            echo "<p class='error'>User Not Deleted.</p>";
        }
    }
    ?>

                <h2>User List</h2>
                <div class="block">  
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							<th  style="text-align:center;" width="15%;">Serial No</th>
							<th  style="text-align:center;" width="35%;">Name</th>
							<th  style="text-align:center;" width="15%;">Username</th>
							<th  style="text-align:center;"  width="20%;">Role</th>
							<th  style="text-align:center;" width="20%;">Action</th>
						</tr>
					</thead>
					<tbody>

<!-- QRY FOR POST JOIN WITH CATAGORY TABLE AND FETCH DATA  -->
				<?php 
                $sql = "select * from tbl_user";
                $data = $db->select($sql);
                if ($data) {
                    $x=0;
                    while ($value = $data->fetch_assoc()) {
                        $x++;
                ?>

                        <tr class="odd gradeX" style="text-align:center;">
                            <td><?php echo $x; ?></td>
							<td><?php echo $value['name']; ?></td>
							<td><?php echo ($value['username']); ?></td>
							<td>
                                <?php
                                    if($value['role'] == 0) {
                                        echo 'Admin';
                                    } elseif ($value['role'] == 1) {
                                        echo 'Author';
                                    } elseif ($value['role'] == 2) {
                                        echo 'Editor';
                                    } else {
                                        echo 'Unknown';
                                    }
                                ?>
                            </td>
							
                            <td><a href="userview.php?id=<?php echo $value['id']; ?>">View</a>
                            <?php
                                if ($user_role == '0') { ?>
                                    || <a href = "<?php echo  $_SERVER ['PHP_SELF'] . '?id=' .  $value ['id']; ?> " onclick = "return confirm('Are You Sure to Delete this User?');" > Delete </a>

                            <?php
                            }
                            ?>
                
                        
                        </td>
						</tr>
                        <?php 
    }
} else {
    echo "No User Available.";
}
?>

					</tbody>
				</table>
	
               </div>
            </div>
        </div>




<?php include 'inc/footer.php'; ?>
<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>

<!-- DELETE OPERATION SQL AND STATUS -->
<?php
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "delete from tbl_slider where id=$id";
    $data = $db->delete($sql);
    if ($data) {
        header("Location:sliderlist.php?del=success");
    } else {
        header("Location:sliderlist.php?del=error");
    }
}

?>

        <div class="grid_10">
            <div class="box round first grid">
<!-- STATUS ACCORDING TO GET MESSAGE -->
	<?php 
        if (isset($_GET['del'])) {
            if ($_GET['del'] == 'success') {
                echo "<p class='success'>Post Deleted successfully.</p>";
            } else if ($_GET['del'] == 'error') {
                echo "<p class='error'>Post Not Deleted.</p>";
            }
        }
    ?>

                <h2>Slider List</h2>
                <div class="block">  
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							
							<th  style="text-align:center;" width="10%;">Serial No</th>
							<th  style="text-align:center;" width="30%;">Slider Title</th>
							<th  style="text-align:center;"  width="40%;">Image</th>
							<th  style="text-align:center;" width="20%;">Action</th>
						</tr>
					</thead>
					<tbody>

<!-- QRY FOR POST JOIN WITH CATAGORY TABLE AND FETCH DATA  -->
						<?php 
        $sql = "select * from tbl_slider";
        $data = $db->select($sql);
        if ($data) {
            $x = 0;
            while ($value = $data->fetch_assoc()) {
                $x++;
                ?>

						<tr class="odd gradeX" style="text-align:center;">
							<td><?php echo $x; ?></td>
							<td><?php echo $value['title']; ?></td>
                            <td>
							<img src="<?php echo $value['image']; ?>" style="width:50%;vertical-align:middle;height:100px;padding:10px 0px;"  alt="<?php echo $value['image']; ?>">
							</td>
							
							<td>

                                <?php if ($user_role == '0') { ?>
                                    <a href="editslider.php?id=<?php echo $value['id']; ?>">Edit</a>
                                    || <a href="<?php echo $_SERVER['PHP_SELF'] . '?id=' . $value['id']; ?>" onclick="return confirm('Are You Sure to Delete this Slider?');">Delete</a>
                                <?php 
                                } ?>
							</td>
						</tr>
						<?php 
    }
} else {
    echo "No Post Available.";
}
?>

					</tbody>
				</table>
	
               </div>
            </div>
        </div>


<?php include 'inc/footer.php'; ?>
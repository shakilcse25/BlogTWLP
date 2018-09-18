<?php include 'inc/header.php'  ?>
<?php include 'inc/sidebar.php'  ?>
        <div class="grid_10">
		
            <div class="box round first grid">


<!-- QOPYRIGHT DATA BIND BY SQL OPERATION AFTER POST METHOD SUBMISSION -->
<?php
    if(isset($_POST['submit'])){
        $copyright = mysqli_real_escape_string($db->link,$_POST['copyright']);

        $qry = "update tbl_copyright set cpright='$copyright'";
        $update = $db->update($qry);

        if($update){
            echo "<p class='success'>Successfully Updated the Copyright!</p>";
        }
        else {
            echo "<p class='error'>Failed to Update!</p>";
        }
    }

    $sql = "select * from tbl_copyright where id=1";
    $result = $db->select($sql);
    $data = $result->fetch_assoc();
?>

                <h2>Update Copyright Text</h2>
                <div class="block copyblock"> 
                 <form action="<?PHP $_SERVER['PHP_SELF']; ?>" method="post">
                    <table class="form">					
                        <tr>
                            <td>
                                <input type="text" placeholder="Enter Copyright Text..." value="<?php echo $data['cpright']; ?>" name="copyright" class="large" />
                            </td>
                        </tr>
						
						 <tr> 
                            <td>
                                <input type="submit" name="submit" Value="Update" />
                            </td>
                        </tr>
                    </table>
                    </form>
                </div>
            </div>
        </div>
        <?php include 'inc/footer.php'  ?>

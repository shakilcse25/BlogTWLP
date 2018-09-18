<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
        <div class="grid_10">
		
            <div class="box round first grid">


<!-- QOPYRIGHT DATA BIND BY SQL OPERATION AFTER POST METHOD SUBMISSION -->
<?php
if (isset($_POST['submit'])) {
    $theme = mysqli_real_escape_string($db->link, $_POST['theme']);

    $qry = "update tbl_theme set theme='$theme'";
    $update = $db->update($qry);

    if ($update) {
        echo "<p class='success'>Successfully Updated the Theme!</p>";
    } else {
        echo "<p class='error'>Failed to Update!</p>";
    }
}

$sql = "select * from tbl_theme where id=1";
$result = $db->select($sql);
$data = $result->fetch_assoc();
?>

                <h2>Update Theme</h2>
                <div class="block copyblock"> 
                 <form action="<?PHP $_SERVER['PHP_SELF']; ?>" method="post">
                    <table class="form">					
                        <tr>
                            <td>
                                <input type="radio" name="theme" value="default" <?php if($data['theme']=='default'){echo ' checked';} ?> > Default<br>
                                <input type="radio" name="theme" value="red" <?php if($data['theme']=='red'){echo ' checked';} ?> > Red<br>
                                <input type="radio" name="theme" value="green" <?php if($data['theme']=='green'){echo ' checked';} ?> > Green
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
        <?php include 'inc/footer.php' ?>

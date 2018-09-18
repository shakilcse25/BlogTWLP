<?php include 'inc/header.php'  ?>
<?php include 'inc/sidebar.php'  ?>
        <div class="grid_10">


<!-- AFTER SUBMIT FORM BINDING THE VALUE WITH DB -->
<?php
if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($db->link, $_POST['catagory']);
    if (!empty($name)) {
        $qry = "insert into tbl_catagory(name) values('$name')";
        $data = $db->insert($qry);
        if ($data) {
            header("Location: catlist.php?msg=success");
        } else {
            header("Location: catlist.php?msg=error");
        }
    }
}   
?>

            <div class="box round first grid">
                <h2>Add New Category</h2>
               <div class="block copyblock"> 
                 <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                    <table class="form">					
                        <tr>
                            <td>
                                <input type="text" placeholder="Enter Category Name..." class="medium" name="catagory" required/>
                            </td>
                        </tr>
						<tr> 
                            <td>
                                <input type="submit" name="submit" Value="Save" />
                            </td>
                        </tr>
                    </table>
                    </form>
                </div>
            </div>
        </div>
<?php include 'inc/footer.php'  ?>
<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">

            <div class="box round first grid">

<!-- MESSAGE -->
<?php 
if (isset($_GET['msg'])) {
    if ($_GET['msg'] == 'success') {
        echo "<p class='success'>User Updated successfully!</p>";
    } else if ($_GET['msg'] == 'error') {
        echo "<p class='error'>User Not Updated!</p>";
    }
}
?>

           <h2>Update User</h2>

<!-- ADD PAGE QUERY AND BINDING DATA FORM TO DB -->
<?php 
    $id = Session::get('userId');
    if (isset($_POST['submit'])) {
        $username = mysqli_real_escape_string($db->link, $fm->validation($_POST['username']));
        //$password = md5(mysqli_real_escape_string($db->link, $fm->validation($_POST['password'])));
        $name = mysqli_real_escape_string($db->link, $fm->validation($_POST['name']));
        $email = mysqli_real_escape_string($db->link, $fm->validation($_POST['email']));
        $details = mysqli_real_escape_string($db->link, $fm->validation($_POST['details']));

        $sql = "update tbl_user set
                username='$username',
                name='$name',
                email='$email',
                details='$details' where id=$id";

        $data = $db->insert($sql);
        if ($data) {
            header("Location:profile.php?msg=success");
        } else {
            header("Location:profile.php?msg=error");
        }
    }


    $qry = "select * from tbl_user where id=$id";
    $res = $db->select($qry);
    $res = $res->fetch_assoc();
?>



                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                        <table class="form">
                        
                            <tr>
                                <td>
                                    <label>Username</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Username" value = "<?php echo $res['username']; ?>" class="medium" name = "username" required/>
                                </td>
                            </tr>

                            <!-- <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Password</label>
                                </td>
                                <td>
                                    <input type="text" value="<?php //echo  $res['password']; ?>" placeholder="Enter Post Title..."  class="medium" name = "password" required/>
                                </td>
                            </tr> -->

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Name</label>
                                </td>
                                <td>
                                    <input type="text" value="<?php echo $res['name']; ?>" placeholder="Enter Post Title..."  class="medium" name = "name" required/>
                                </td>
                            </tr>

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Email</label>
                                </td>
                                <td>
                                    <input type="text" value="<?php echo $res['email']; ?>" placeholder="Enter Post Title..."  class="medium" name = "email" required/>
                                </td>
                            </tr>

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Details</label>
                                </td>
                                <td>
                                    <textarea class="tinymce" name="details"><?php echo $res['details']; ?></textarea>
                                </td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" name="submit">Update</button>
                                </td>
                            </tr>
                        </table>
                    </form>
             </div>
        </div>
    </div>



<?php include 'inc/footer.php' ?>


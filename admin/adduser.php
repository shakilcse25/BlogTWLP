<?php include 'inc/header.php' ?>

<?php
    if (!$user_role == '0') {
        echo "<script>window.location='index.php';</script>";
    }   
?>

<?php include 'inc/sidebar.php' ?>
<div class="grid_10">

            <div class="box round first grid">

<!-- MESSAGE -->
<?php 
if (isset($_GET['msg'])) {
    if ($_GET['msg'] == 'success') {
        echo "<p class='success'>User Created successfully!</p>";
    } else if ($_GET['msg'] == 'error') {
        echo "<p class='error'>User Not Created!</p>";
    }
}
?>

           <h2>Add New User</h2>

<!-- ADD PAGE QUERY AND BINDING DATA FORM TO DB -->
<?php 
    if (isset($_POST['submit'])) {
        $username = mysqli_real_escape_string($db->link, $fm->validation($_POST['username']));
        $password = md5(mysqli_real_escape_string($db->link, $fm->validation($_POST['password'])));
        $role = mysqli_real_escape_string($db->link, $fm->validation($_POST['role']));
        $email = mysqli_real_escape_string($db->link, $fm->validation($_POST['email']));


        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<span class='error'>Invalid Email Format</span>";
        }
        else{
            $mailqry = "select * from tbl_user where email='$email' limit 1";
            $checkmail = $db->select($mailqry);

            if ($checkmail) {
                echo "<span class='error'>Email Already Exist</span>";
            } else {
                $sql = "insert into tbl_user(username,password,email,role) values('$username','$password','$email','$role')";
                $data = $db->insert($sql);

                if ($data) {
                    header("Location:adduser.php?msg=success");
                } else {
                    header("Location:adduser.php?msg=error");
                }
            }
        }
    }
?>



                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                        <table class="form">
                        
                            <tr>
                                <td>
                                    <label>Username</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Username"  class="medium" name = "username" required/>
                                </td>
                            </tr>

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Password</label>
                                </td>
                                <td>
                                    <input type="password" placeholder="Password" class="medium" name="password" required/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <input type="email" placeholder="Email" class="medium" name = "email" required/>
                                </td>
                            </tr>

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Role</label>
                                </td>
                                <td>
                                    <select name='role' style="width:250px;" id="select" required>
                                        <option value="" selected disabled>Select Role</option>
                                        <option value="0">Admin</option>
                                        <option value="1">Author</option>
                                        <option value="2">Editor</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" name="submit">Create</button>
                                </td>
                            </tr>
                        </table>
                    </form>
             </div>
        </div>
    </div>



<?php include 'inc/footer.php' ?>


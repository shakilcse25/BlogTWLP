<?php include 'inc/header.php'  ?>
<?php include 'inc/sidebar.php'  ?>
        <div class="grid_10">
            <div class="box round first grid">

<?php 

    if (isset($_POST['submit'])){
        echo "enter post";
        $title = mysqli_real_escape_string($db->link, $_POST['title']);
        $slogan = mysqli_real_escape_string($db->link, $_POST['slogan']);


        $permited = array('png');
        $file_name = $_FILES['logo']['name'];
        $file_size = $_FILES['logo']['size'];
        $file_temp = $_FILES['logo']['tmp_name'];

        echo $file_name;

        if (!empty($file_name)) {

            echo "not empty.";

            $div = explode('.', $file_name);
            $file_ext = strtolower(end($div));
            $same_image = 'logo'. '.' . $file_ext;
            $uploaded_image = "uploads/" . $same_image;

            if ($file_size > 3548576) {
                echo "<span class='error'>Image Size should be less then 1MB!</span>";
            } else if (in_array($file_ext, $permited) === false) {
                echo "<span class='error'>You can upload only:-"
                    . implode(', ', $permited) . "</span>";
            } else {
                move_uploaded_file($file_temp, $uploaded_image);
                $query = "update tbl_title set 
                title = '$title',
                slogan='$slogan',
                logo='$uploaded_image'
                where id=1";

                $updated_rows = $db->update($query);
                if ($updated_rows) {
                    header("Location: titleslogan.php?msg=success");
                } else {
                    header("Location: titleslogan.php?msg=error");
                }
            }
        } else {
            echo "empty";

            $query = "update tbl_title set 
                title = '$title',
                slogan='$slogan'
                where id=1";
            $updated_rows = $db->update($query);
            if ($updated_rows) {
                header("Location: titleslogan.php?msg=success");
            } else {
                header("Location: titleslogan.php?msg=error");
            }
        }
    }
?>

<?php
    $sql = "select * from tbl_title where id=1";
    $data = $db->select($sql);
    $data = $data->fetch_assoc();
?>



            <?php 
            if (isset($_GET['msg'])) {
                if ($_GET['msg'] == 'success') {
                    echo "<p class='success'>Title and Slogan Updated successfully.</p>";
                } else if ($_GET['msg'] == 'error') {
                    echo "<p class='error'>Title and Slogan Not Updated.</p>";
                }
            }
            ?>




                <h2>Update Site Title and Description</h2>
                <div class="block sloginblock">               
                 <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
                    <table class="form">					
                        <tr>
                            <td>
                                <label>Website Title</label>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Website Title..." value="<?php echo $data['title']; ?>"  name="title" class="medium" />
                            </td>
                        </tr>
						 <tr>
                            <td>
                                <label>Website Slogan</label>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Website Slogan..." value="<?php echo $data['slogan']; ?>" name="slogan" class="medium" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Upload Logo</label>
                            </td>
                            <td>
                                <input type="file" name="logo">
                                <img src="<?php echo $data['logo']; ?>" style="vertical-align:middle;margin-left:40px;" width="160px;" height="100px;" alt="">
                                <?php echo $data['logo']; ?>
                            </td>
                        </tr>
						 
						
						 <tr>
                            <td>
                            </td>
                            <td>
                                <input type="submit" name="submit" value="Update" />
                            </td>
                        </tr>
                    </table>
                 </form>
                </div>
            </div>
        </div>
        <?php include 'inc/footer.php'  ?>
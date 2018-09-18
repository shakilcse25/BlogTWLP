<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">

            <div class="box round first grid">

<!-- MESSAGE ACCORDING TO GET METHOD STATUS -->
<?php 
if (isset($_GET['add'])) {
    if ($_GET['add'] == 'success') {
        echo "<p class='success'>Slider Uploaded successfully.</p>";
    } else if ($_GET['add'] == 'error') {
        echo "<p class='error'>Slider Not Upload.</p>";
    }
}
?>

                <h2>Add New Slider</h2>


<!-- TAKE ALL THE VALUE FROM FORM AND BIND IT TO THE DAGABASE. -->
<?php 
    if (isset($_POST['submit'])) {
        $title = mysqli_real_escape_string($db->link, $_POST['title']);



        // IAMGE VALIDATION
        $permited = array('jpg', 'jpeg', 'png', 'gif');
        $file_name = $_FILES['img']['name'];
        $file_size = $_FILES['img']['size'];
        $file_temp = $_FILES['img']['tmp_name'];

        $div = explode('.', $file_name);
        $file_ext = strtolower(end($div));
        $unique_image = substr(md5(time()), 0, 10) . '.' . $file_ext;
        $uploaded_image = "uploads/slider".$unique_image;


        if ($file_size > 3548576) {
            echo "<span class='error'>Image Size should be less then 3.5MB!</span>";
        } else if (in_array($file_ext, $permited) === false) {
            echo "<span class='error'>You can upload only:-"
                . implode(', ', $permited) . "</span>";
        } else {
            move_uploaded_file($file_temp, $uploaded_image);
            $query = "INSERT INTO tbl_slider(title,image) 
                            VALUES('$title','$uploaded_image')";


            $inserted_rows = $db->insert($query);
            if ($inserted_rows) {
                header("Location:addslider.php?add=success");
            } else {
                header("Location:addslider.php?add=error");
            }
        }

    }
    ?>

                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
                        <table class="form">
                        


                            <tr>
                                <td>
                                    <label>Title</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter Post Title..." value = "<?php if (isset($title)) {
                                                                                                        echo $title;
                                                                                                    } ?>" class="medium" name = "title" required/>
                                </td>
                            </tr>
                        

                            <tr>
                                <td>
                                    <label>Upload Slider Image</label>
                                </td>
                                <td>
                                    <input type="file" name="img" id="img" required>
                                </td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" name="submit">Submit</button>
                                </td>
                            </tr>
                        </table>
                    </form>
             </div>
        </div>
    </div>



<?php include 'inc/footer.php' ?>


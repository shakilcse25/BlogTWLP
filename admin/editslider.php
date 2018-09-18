<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">

            <div class="box round first grid">

<!-- MESSAGE ACCORDING TO GET METHOD STATUS -->
<?php 
    if (isset($_GET['edit'])) {
        if ($_GET['edit'] == 'success') {
            echo "<p class='success'>Slider Edited successfully.</p>";
        } else if ($_GET['edit'] == 'error') {
            echo "<p class='error'>Slider Not Edited.</p>";
        }
    }
    if(isset($_POST['back'])){
        header("Location:sliderlist.php");
    }
?>



                <h2>Edit Slider</h2>


<!-- TAKE ALL THE VALUE FROM FORM AND BIND IT TO THE DAGABASE. -->
<?php 
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $qry = "select * from tbl_slider where id= $id ";
        $res= $db->select($qry);
        $res = $res->fetch_assoc();
    }
    else {
        header("Location:index.php");
    }

    if (isset($_POST['submit'])) {
        $id = $_GET['id'];
        $title = mysqli_real_escape_string($db->link, $_POST['title']);

        $permited = array('jpg', 'jpeg', 'png', 'gif');
        $file_name = $_FILES['img']['name'];
        $file_size = $_FILES['img']['size'];
        $file_temp = $_FILES['img']['tmp_name'];


        if (!empty($file_name)) {

            $div = explode('.', $file_name);
            $file_ext = strtolower(end($div));
            $unique_image = substr(md5(time()), 0, 10) . '.' . $file_ext;
            $uploaded_image = "uploads/" . $unique_image;

            if ($file_size > 3548576) {
                echo "<span class='error'>Image Size should be less then 3.5MB!</span>";
            } else if (in_array($file_ext, $permited) === false) {
                echo "<span class='error'>You can upload only:-"
                    . implode(', ', $permited) . "</span>";
            } else {
                move_uploaded_file($file_temp, $uploaded_image);
                $query = "update tbl_slider set 
                        title='$title',
                        image='$uploaded_image'
                        where id = $id;";

                $updated_rows = $db->update($query);
                if ($updated_rows) {
                    header("Location:editslider.php?id=$id&edit=success");
                } else {
                    header("Location:editslider.php?id=$id&edit=error");
                }
            }
        } else {

            $query = "update tbl_slider set 
                    title='$title'
                    where id = $id;";
            $updated_rows = $db->update($query);
            if ($updated_rows) {
                header("Location:editslider.php?id=$id&edit=success");
            } else {
                header("Location:editslider.php?id=$id&edit=error");
            }
        }


    }
?>


                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF'].'?id='.$id; ?>" method="POST" enctype="multipart/form-data">
                        <table class="form">
                        


                            <tr>
                                <td>
                                    <label>Title</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter Post Title..." value = "<?php echo $res['title']; ?>" class="medium" name = "title" required/>
                                </td>
                            </tr>
                        

                            <tr>
                                <td>
                                    <label>Upload Slider Image</label>
                                </td>
                                <td>
                                    <input type="file" name="img" id="img">
                                    <img src="<?php echo $res['image']; ?>" alt="" style="padding:15px 0px;">
                                </td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" name="submit">Submit</button>
                                    <button type="submit" name="back">Back</button>
                                </td>
                            </tr>
                        </table>
                    </form>
             </div>
        </div>
    </div>



<?php include 'inc/footer.php' ?>


<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">
            <div class="box round first grid">


<?php 
if (isset($_GET['add'])) {
    if ($_GET['add'] == 'success') {
        echo "<p class='success'>Post Uploaded successfully.</p>";
    } else if ($_GET['add'] == 'error') {
        echo "<p class='error'>Post Not Upload.</p>";
    }
}
?>

                <h2>Add New Post</h2>

<!-- BIND ALL THE VALUE AND FILE VALIDATION -->

<?php 
if (isset($_POST['submit'])) {
    $title = mysqli_real_escape_string($db->link, $_POST['title']);
    $catagory = mysqli_real_escape_string($db->link, $_POST['catagory']);
    $content = mysqli_real_escape_string($db->link, $_POST['body']);
    $tags = mysqli_real_escape_string($db->link, $_POST['tags']);
    $author = mysqli_real_escape_string($db->link, $_POST['author']);
    $userid = mysqli_real_escape_string($db->link, $_POST['userid']);


    $id = $_GET['id'];
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
            echo "<span class='error'>Image Size should be less then 1MB!</span>";
        } else if (in_array($file_ext, $permited) === false) {
            echo "<span class='error'>You can upload only:-"
                . implode(', ', $permited) . "</span>";
        } else {
            move_uploaded_file($file_temp, $uploaded_image);
            $query = "update tbl_post set 
            cat = '$catagory',
            title='$title',
            body='$content',
            image='$uploaded_image',
            author='$author',
            tags='$tags',
            userid=$userid
            where id = $id;";

            $updated_rows = $db->update($query);
            if ($updated_rows) {
                header("Location:postlist.php?edit=success");
            } else {
                header("Location:postlist.php?edit=error");
            }
        }
    }
    else{

        $query = "update tbl_post set 
            cat = '$catagory',
            title='$title',
            body='$content',
            author='$author',
            tags='$tags',
            userid=$userid
            where id = $id;
        ";
        $updated_rows = $db->update($query);
        if ($updated_rows) {
            header("Location:postlist.php?edit=success");
        } else {
            header("Location:postlist.php?edit=error");
        }
    }


}
?>

<!--SHOW VALUE INTO INPUT FIELD -->

<?php 
if (isset($_GET['id'])) {
    $ids = $_GET['id'];    
    $qry = "select * from tbl_post where id = $ids";
    $data = $db->select($qry);
    $data = $data->fetch_assoc();
}

?>


                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF'].'?id='.$data['id']; ?>" method="POST" enctype="multipart/form-data">
                        <table class="form">




                            <tr>
                                <td>
                                    <label>Author</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Author of this Post.." value="<?php echo $data['author']; ?>" class="medium" name = "author" required/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Title</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter Post Title..." value = "<?php echo $data['title']; ?>" class="medium" name = "title" required/>
                                </td>
                            </tr>
                        
                            <tr>
                                <td>
                                    <label>Category</label>
                                </td>
                                <td>
                                    <select id="select" name="catagory" required>
                                    <?php 

                                        $catid = $data['cat'];
                                        echo $catid;
                                        $catsql = "select * from tbl_catagory";
                                        $cat = $db->select($catsql);
                                        if($cat){
                                            while($cata = $cat->fetch_assoc()){
                                    
                                    ?>
                                        <option value="<?php echo $cata['id']; ?>" <?php if($catid==$cata['id']){echo " selected";}  ?>><?php echo $cata['name']; ?></option>

                                    <?php
                                            }
                                        }else{
                                            echo "No Catagory Here.";
                                        }   
                                    ?>


                                    </select>
                                </td>
                            </tr>
                    

                            <tr>
                                <td>
                                    <label>Upload Image</label>
                                </td>
                                <td>
                                    <input type="file" name="img" id="img" value="<?php echo $data['image']; ?>">
                                    <img src="<?php echo $data['image']; ?>" style="vertical-align:middle;margin-left:40px;" width="160px;" height="100px;" alt="">
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Content</label>
                                </td>
                                <td>
                                    <textarea class="tinymce" name="body"><?php echo $data['body']; ?></textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Tags</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter Post Tags..." value = "<?php echo $data['tags']; ?>" class="medium" name="tags" required/>
                                    <input type="hidden" name="userid" value="<?php echo $user_id; ?>">
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


<?php include 'inc/header.php'  ?>
<?php include 'inc/sidebar.php'  ?>
<div class="grid_10">

            <div class="box round first grid">

<!-- MESSAGE ACCORDING TO GET METHOD STATUS -->
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


<!-- TAKE ALL THE VALUE FROM FORM AND BIND IT TO THE DAGABASE. -->
<?php 
    if (isset($_POST['submit'])) {
        $title = mysqli_real_escape_string($db->link, $_POST['title']);
        $catagory = mysqli_real_escape_string($db->link, $_POST['catagory']);
        $content = mysqli_real_escape_string($db->link, $_POST['body']);
        $tags = mysqli_real_escape_string($db->link, $_POST['tags']);
        $author = mysqli_real_escape_string($db->link, $_POST['author']);
        $userid = mysqli_real_escape_string($db->link, $_POST['userid']);



        // IAMGE VALIDATION
        $permited = array('jpg', 'jpeg', 'png', 'gif');
        $file_name = $_FILES['img']['name'];
        $file_size = $_FILES['img']['size'];
        $file_temp = $_FILES['img']['tmp_name'];

        $div = explode('.', $file_name);
        $file_ext = strtolower(end($div));
        $unique_image = substr(md5(time()), 0, 10) . '.' . $file_ext;
        $uploaded_image = "uploads/" . $unique_image;


        if ($file_size > 3548576){
            echo "<span class='error'>Image Size should be less then 1MB!</span>";
        } 
        else if(in_array($file_ext, $permited) === false) {
            echo "<span class='error'>You can upload only:-"
                . implode(', ', $permited) . "</span>";
        }
        else{
            move_uploaded_file($file_temp, $uploaded_image);

            $query = "INSERT INTO tbl_post(cat,title,body,image,author,tags,userid) 
                        VALUES('$catagory','$title','$content','$uploaded_image','$author','$tags','$userid')";


            $inserted_rows = $db->insert($query);
            if ($inserted_rows) {
                header("Location:addpost.php?add=success");
            } else {
                header("Location:addpost.php?add=error");
            }
        }

    }
?>


<?php
    // ANOTHER WAY FOR FILE UPLOAD VALIDATION
    
    // $target_dir = "uploads/";
    // $target_file = $target_dir . basename($_FILES["image"]["name"]);
    // $uploadOk = 1;
    // $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    // // Check if image file is a actual image or fake image
    // if (isset($_POST["submit"])) {
    //     $check = getimagesize($_FILES["image"]["tmp_name"]);
    //     if ($check !== false) {
    //         echo "File is an image - " . $check["mime"] . ".";
    //         $uploadOk = 1;
    //     } else {
    //         echo "File is not an image.";
    //         $uploadOk = 0;
    //     }
    // }
    // // Check if file already exists
    // if (file_exists($target_file)) {
    //     echo "Sorry, file already exists.";
    //     $uploadOk = 0;
    // }
    // // Check file size
    // if ($_FILES["image"]["size"] > 500000) {
    //     echo "Sorry, your file is too large.";
    //     $uploadOk = 0;
    // }
    // // Allow certain file formats
    // if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    //     && $imageFileType != "gif") {
    //     echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    //     $uploadOk = 0;
    // }
    // // Check if $uploadOk is set to 0 by an error
    // if ($uploadOk == 0) {
    //     echo "Sorry, your file was not uploaded.";
    // // if everything is ok, try to upload file
    // } else {
    //     if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {

    //         $query = "INSERT INTO tbl_post(cat,title,body,image,author,tags) 
    //                         VALUES('$catagory','$title','$content','$target_file','$author','$tags')";


    //         $inserted_rows = $db->insert($query);
    //         if ($inserted_rows) {
    //             echo "<span class='success'>Post Inserted Successfully.</span>";
    //         } else {
    //             echo "<span class='error'>Post Not Inserted !</span>";
    //         }
    //     } else {
    //         echo "Sorry, there was an error uploading your file.";
    //     }
    // }
?>



                <div class="block">             
                    <form action="addpost.php" method="POST" enctype="multipart/form-data">
                        <table class="form">
                        
                            <tr>
                                <td>
                                    <label>Author</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Author of this Post.." value="<?php echo $user_name; ?>" class="medium" name = "author" required/>
                                </td>
                            </tr>

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
                                    <label>Category</label>
                                </td>
                                <td>
                                    <select id="select" name="catagory" required>
                                        <option selected disabled>Select Catagory</option>
                                <?php   
                                    $sql = "select * from tbl_catagory";
                                    $data = $db->select($sql);
                                    if($data){
                                        while($cata = $data->fetch_assoc()){
                                ?>

                                        <option value="<?php echo $cata['id']; ?>"><?php  echo $cata['name']; ?></option>

                                <?php
                                        }
                                    }else {
                                        echo "No Catagory Available.";
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
                                    <input type="file" name="img" id="img">
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Content</label>
                                </td>
                                <td>
                                    <textarea class="tinymce" name="body"><?php if (isset($content)){
                                            echo $content;
                                        } ?></textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Tags</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter Post Tags..." value = "<?php if (isset($tags)) {
                                            echo $tags;
                                        } ?>" class="medium" name="tags" required/>

                                    <input type="text" name="userid" value="<?php echo $user_id;?>">
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



<?php include 'inc/footer.php'  ?>


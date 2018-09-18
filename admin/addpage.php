<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">

            <div class="box round first grid">

<!-- MESSAGE -->
<?php 
if (isset($_GET['msg'])) {
    if ($_GET['msg'] == 'success') {
        echo "<p class='success'>Page Created successfully!</p>";
    } else if ($_GET['msg'] == 'error') {
        echo "<p class='error'>Page Not Created!</p>";
    }
}
?>

                <h2>Add New Post</h2>

<!-- ADD PAGE QUERY AND BINDING DATA FORM TO DB -->
<?php 
if (isset($_POST['submit'])) {
    $title = mysqli_real_escape_string($db->link, $_POST['title']);
    $body = mysqli_real_escape_string($db->link, $_POST['body']);

    $sql = "insert into tbl_page(title,body) values('$title','$body')";
    $data= $db->insert($sql);
    if($data){
        header("Location:addpage.php?msg=success");
    }
    else {
        header("Location:addpage.php?msg=error");
    }
}
?>



                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                        <table class="form">
                        
                            <tr>
                                <td>
                                    <label>Title</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter Post Title..." value = "" class="medium" name = "title" required/>
                                </td>
                            </tr>

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Content</label>
                                </td>
                                <td>
                                    <textarea class="tinymce" name="body"></textarea>
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


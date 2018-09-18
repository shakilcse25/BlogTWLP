<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">

            <div class="box round first grid">


<?php 
if (isset($_GET['msg'])) {
    if ($_GET['msg'] == 'success') {
        echo "<p class='success'>Page Updated successfully!</p>";
    } else if ($_GET['msg'] == 'error') {
        echo "<p class='error'>Page Not Updated!</p>";
    }
}
?>

    <h2>Edit Page</h2>





<?php

    if (isset($_GET['pageid'])) {
        $pageid = $_GET['pageid'];
    }
 
    if (isset($_POST['submit'])) {
        $title = mysqli_real_escape_string($db->link, $_POST['title']);
        $body = mysqli_real_escape_string($db->link, $_POST['body']);

        $sql = "update tbl_page set title='$title', body='$body' where id=$pageid";
        $data = $db->update($sql);
        if ($data) {
            header("Location:page.php?pageid=$pageid&msg=success");
        } else {
            header("Location:page.php?pageid=$pageid&msg=error");
        }
    }
    else if(isset($_POST['delete'])){
        $sql = "delete from tbl_page where id=$pageid";
        $del = $db->delete($sql);
        if($del){
            header("Location:index.php");
        }
        else {
            echo "Page not deleted!!";
        }
    }

    $sql = "select * from tbl_page where id = $pageid";
    $data = $db->select($sql);
    $data = $data->fetch_assoc();
?>



                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF'].'?pageid='.$pageid; ?>" method="POST">
                        <table class="form">
                            <tr>
                                <td>
                                    <label>Title</label>
                                </td>
                                <td>
                                    <input type="text"  value = "<?php echo $data['title']; ?>" class="medium" name = "title" required/>
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
                                <td></td>
                                <td>
                                    <button type="submit" name="submit">Submit</button>
                                    <button type="submit" name="delete" onclick="return confirm('Are you sure to delete this page?');">Delete</button>
                                </td>
                            </tr>
                        </table>
                    </form>
             </div>
        </div>
    </div>



<?php include 'inc/footer.php' ?>


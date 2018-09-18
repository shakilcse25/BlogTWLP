<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
<div class="grid_10">
            <div class="box round first grid">



                <h2>Reply Message</h2>

<!-- ADD PAGE QUERY AND BINDING DATA FORM TO DB -->
<?php 
if (isset($_POST['submit'])) {
    $to = mysqli_real_escape_string($db->link, $fm->validation($_POST['toemail']));
    $from = mysqli_real_escape_string($db->link, $fm->validation($_POST['from']));
    $subject = mysqli_real_escape_string($db->link, $fm->validation($_POST['subject']));
    $msg = mysqli_real_escape_string($db->link, $fm->validation($_POST['msg']));
    $email = mail($to,$subject,$msg,$from);


    if ($email) {
        header("Location:inbox.php?msg=success");
    } else {
        header("Location:inbox.php?msg=error");
    }
}
?>

<?php 
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "select * from tbl_contact where id = $id";
    $result = $db->select($sql);
    $data = $result->fetch_assoc();
}
?>

                <div class="block">             
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                        <table class="form">
                        
                            <tr>
                                <td>
                                    <label>To:</label>
                                </td>
                                <td>
                                    <input type="text" value = "<?PHP echo $data['email']; ?>" class="medium" name = "toemail" readonly required/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>From:</label>
                                </td>
                                <td>
                                    <input type="text" class="medium" name = "from" required/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Subject:</label>
                                </td>
                                <td>
                                    <input type="text" class="medium" name = "subject" required/>
                                </td>
                            </tr>

                            <tr>
                                <td style="vertical-align: top; padding-top: 9px;">
                                    <label>Message</label>
                                </td>
                                <td>
                                    <textarea class="tinymce" name="msg"></textarea>
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


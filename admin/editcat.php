<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>
        <div class="grid_10">

<?php
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = "select * from tbl_catagory where id = $id";
        $value = $db->select($sql);
        $value = $value->fetch_assoc(); 
    }

    


    if (isset($_POST['submit'])) {
        $name = mysqli_real_escape_string($db->link, $_POST['catagory']);
        if (!empty($name) && isset($_GET['id'])) {
            $id = $_GET['id'];
            $qry = "update tbl_catagory set name='$name' where id = $id";
            $data = $db->update($qry);
            if ($data) {
                header("Location: catlist.php?edit=success");
            } else {
                header("Location: catlist.php?edit=error");
            }
        }
    }
?>

            <div class="box round first grid">
                <h2>Add New Category</h2>
               <div class="block copyblock"> 
                 <form action="<?php echo $_SERVER['PHP_SELF'].'?id='.$id; ?>" method="post">
                    <h3>Edit Catagory : </h3>
                    <table class="form">					
                        <tr>
                            <td>
                                <input type="text" value="<?php echo $value['name']; ?>" class="medium" name="catagory" required/>
                            </td>
                        </tr>
						<tr> 
                            <td>
                                <input type="submit" name="submit" Value="Save" />
                            </td>
                        </tr>
                    </table>
                    </form>
                </div>
            </div>
        </div>
<?php include 'inc/footer.php' ?>
<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>

        <div class="grid_10">
            <div class="box round first grid">

<?php
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $sql = "select * from tbl_user where id=$id";
        $result = $db->select($sql);
        $data = $result->fetch_assoc();
    }
?>

<style>
   span{
        float: left;
        margin-right: 10px;
   }
</style>

                <h2>View User</h2>
                <div class="block">
                    <span> <strong>Name:</strong> </span>
                    <p><?php echo $data['name']; ?></p>

                    <span> <strong>Username:</strong> </span>
                    <p><?php echo $data['username']; ?></p>

                    <span> <strong>Role:</strong> </span>
                    <p>
                        <?php
                            if ($data['role']==0) {
                                echo 'Admin';
                            }
                            elseif ($data['role']==1) {
                                echo 'Author';
                            }
                            elseif ($data['role']==2) {
                                echo 'Editor';
                            }
                            else {
                                echo 'Unknown';
                            }   
                        ?>
                    </p>

                    <span> <strong>Email:</strong> </span>
                    <p><?php echo $data['email']; ?></p>

                    <span> <strong>Details:</strong> </span>
                    <p><?php echo $data['details']; ?></p>


                    <a href="userlist.php" class='btn'>Back</a>
               </div>
            </div>
        </div>




<?php include 'inc/footer.php'; ?>
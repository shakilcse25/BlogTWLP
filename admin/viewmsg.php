<?php include 'inc/header.php' ?>
<?php include 'inc/sidebar.php' ?>

        <div class="grid_10">
            <div class="box round first grid">

<?php 
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "select * from tbl_contact where id = $id";
    $result = $db->select($sql);
    $data = $result->fetch_assoc();
}
?>

                <h2>Inbox</h2>
                <div class="block">        
                    <h4><?php  echo $data['firstname'].' '.$data['lastname']; ?></h4>
                    <h5><?php echo $data['email'];  ?></h5>
                    <h6><?php echo $fm->formatDate($data['date']); ?></h6>
                    <br>
                    <p class="text-center"><?php echo $data['message'];  ?></p>
               </div>
            </div>
        </div>
        <?php include 'inc/footer.php' ?>

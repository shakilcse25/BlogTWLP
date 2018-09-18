
< ? php ob_start (); ?>
<?php include '../config/config.php' ?>
<?php include '../lib/Database.php' ?>
<?php include '../helpers/Format.php' ?>
<?php $db = new Database();

    if (isset($_GET['delid'])) {
        $delid = $_GET['delid'];
        $delqry = "delete from tbl_catagory where id = $delid";
        $data = $db->delete($delqry);
        if ($data) {
            header("Location: catlist.php?del=success");
        } else {
            header("Location: catlist.php?del=error");
        }
    }

?>
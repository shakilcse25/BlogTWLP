<?php 
include '../config/config.php';
include '../lib/Database.php';
$db = new Database();

if (isset($_GET['delid'])) {
    $id = $_GET['delid'];

    $sql = "update tbl_contact set status=1 where id = $id";
    $result = $db->update($sql);
    if ($result) {
        header("Location:inbox.php");
    }
    else {
        echo "can't seen";
    }
}
?>
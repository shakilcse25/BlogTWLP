<?php include 'inc/header.php'  ?>
<?php
if (!$user_role == '0') {
	echo "<script>window.location='index.php';</script>";
}
?>
<?php include 'inc/sidebar.php'  ?>


<style>
table{
	width:100%;
	text-align:center;
}
table th{
	text-align:center !important;
	vertical-align:middle;
}
</style>

        <div class="grid_10">
            <div class="box round first grid">

<?php   
	$sql = "select * from tbl_contact where status=0 order by id DESC";
	$result = $db->select($sql);


	if (isset($_GET['msg'])) {
		if ($_GET['msg'] == 'success') {
			echo "<p class='success'>Message Sent Successfully!</p>";
		} else if ($_GET['msg'] == 'error') {
			echo "<p class='error'>Message not Sent!</p>";
		}
	}
?>


                <h2>Inbox</h2>
                <div class="block">        
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							<th width="5%;">Serial No.</th>
							<th width="20%;">Email</th>
							<th width="35%;">Message</th>
							<th width="20%;">Date</th>
							<th width="20%;">Action</th>
						</tr>
					</thead>
					<tbody>

							<?php
								if ($result) {
									while ($data = $result->fetch_assoc()) {

							?>
						<tr class="odd gradeX">
							<td> <?php  echo $data['id']; ?> </td>
							<td> <?php echo $data['email']; ?> </td>
							<td> <?php echo $fm->textShort($data['message'],36); ?> </td>
							<td> <?php echo $fm->formatDate($data['date']); ?> </td>
							<td><a href="viewmsg.php?id=<?php echo $data['id']; ?>">View</a> || <a href="replymsg.php?id=<?php echo $data['id']; ?>">Reply</a> || <a href="seenmsg.php?delid=<?php echo $data['id']; ?>" onclick="return confirm('Are you sure to trash this message to seen box?');">Seen</a></td>
						</tr>

							<?php  } } ?>

					</tbody>
					</table>
               </div>


			        <h2>Seen message</h2>

<?php
if (isset($_GET['del'])) {
	$del = $_GET['del'];
	$sql = "delete from tbl_contact where id = $del";
	$delres = $db->delete($sql);
	if ($del) {
		header("Location: inbox.php?delmsg=success");
	} else {
		header("Location: inbox.php?delmsg=error");
	}
}

if (isset($_GET['delmsg'])) {
	if ($_GET['delmsg'] == 'success') {
		echo "<p class='success'>Message Deleted Successfully!</p>";
	} else if ($_GET['delmsg'] == 'error') {
		echo "<p class='error'>Message not Delete!</p>";
	}
}

$qry = "select * from tbl_contact where status=1 order by id DESC";
$res = $db->select($qry);

?>

                	<div class="block">        
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							<th width="5%;">Serial No.</th>
							<th width="20%;">Email</th>
							<th width="35%;">Message</th>
							<th width="20%;">Date</th>
							<th width="20%;">Action</th>
						</tr>
					</thead>
					<tbody>

					<?php
						if ($res) {
							while ($val = $res->fetch_assoc()) {

								?>
						<tr class="odd gradeX">
							<td> <?php echo $val['id']; ?> </td>
							<td> <?php echo $val['email']; ?> </td>
							<td> <?php echo $fm->textShort($val['message'], 36); ?> </td>
							<td> <?php echo $fm->formatDate($val['date']); ?> </td>
							<td><a href="viewmsg.php?id=<?php echo $val['id']; ?>">View</a> || <a href="replymsg.php?id=<?php echo $val['id']; ?>">Reply</a> || <a href="inbox.php?del=<?php echo $val['id']; ?>" onclick="return confirm('Are You Sure to Delete this Message?');">Delete</a></td>
						</tr>

							<?php 
					}
				} ?>

					</tbody>
					</table>
               </div>


            </div>
        </div>
        <?php include 'inc/footer.php'  ?>

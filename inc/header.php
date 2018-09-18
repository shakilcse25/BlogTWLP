<?php include 'config/config.php' ?>
<?php include 'lib/Database.php' ?>
<?php include 'helpers/Format.php' ?>
<?php $db = new Database(); $fm = new Format(); ?>

<!DOCTYPE html>
<html>
<head>

	<?php  
		if(isset($_GET['pageid'])) {
			$pageid = $_GET['pageid'];
			$sql = "select * from tbl_page where id=$pageid";
			$res = $db->select($sql);
			$res = $res->fetch_assoc();
			echo "<title>".$res['title']."-".TITLE."</title>";
		}
		elseif (isset($_GET['id'])) {
			$id = $_GET['id'];
			$sql = "select * from tbl_post where id=$id";
			$res = $db->select($sql);
			$res = $res->fetch_assoc();
			echo "<title>" . $res['title'] . "-" . TITLE . "</title>";
		} elseif (isset($_GET['catagory'])) {
			$id = $_GET['catagory'];
			$sql = "select * from tbl_catagory where id=$id";
			$res = $db->select($sql);
			if ($res) {
				$res = $res->fetch_assoc();
				echo "<title>" . $res['name'] . "-" . TITLE . "</title>";
			}
			else {
				echo "<title> Unknown -" . TITLE . "</title>";
			}

		}
		else{
			echo "<title>".$fm->title().'-'.TITLE."</title>";
		}
	?>

	<meta name="language" content="English">
	<meta name="description" content="It is a website about education">
	<meta name="keywords" content="blog,cms blog">
	<meta name="author" content="Delowar">
	<link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.css">	
	<link rel="stylesheet" href="css/nivo-slider.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="style.css">


	<?php
		$themesql = "select * from tbl_theme limit 1";
		$theme = $db->select($themesql);
		$theme = $theme->fetch_assoc();
		if($theme['theme']=='green')
		{
			echo "<link rel='stylesheet' href='theme/green.css'>";
		}
		else if($theme['theme'] == 'red') {
			echo "<link rel='stylesheet' href='theme/red.css'>";
		}   
	?>






	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/jquery.nivo.slider.js" type="text/javascript"></script>

<script type="text/javascript">
$(window).load(function() {
	$('#slider').nivoSlider({
		effect:'random',
		slices:10,
		animSpeed:500,
		pauseTime:5000,
		startSlide:0, //Set starting Slide (0 index)
		directionNav:false,
		directionNavHide:false, //Only show on hover
		controlNav:false, //1,2,3...
		controlNavThumbs:false, //Use thumbnails for Control Nav
		pauseOnHover:true, //Stop animation while hovering
		manualAdvance:false, //Force manual transitions
		captionOpacity:0.8, //Universal caption opacity
		beforeChange: function(){},
		afterChange: function(){},
		slideshowEnd: function(){} //Triggers after all slides have been shown
	});

	
});
</script>
<style>
.error{
	color:red;
	font-size:18px;
}
.success{
	color:green;
	font-size:18px;
}
</style>

</head>

<body>
	<div class="headersection templete clear">

<?php
	$sql = "select * from tbl_title where id=1";
	$data = $db->select($sql);
	$data = $data->fetch_assoc();

	$qry = "select * from tbl_page";
	$nav = $db->select($qry);
?>


		<a href="index.php">
			<div class="logo">
				<img src="admin/<?php echo $data['logo']; ?>" alt="Logo"/>
				<h2><?php  echo $data['title']; ?></h2>
				<p><?php echo $data['slogan']; ?></p>
			</div>
		</a>
		<div class="social clear">
			<div class="icon clear">
				<a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
				<a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
				<a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
				<a href="#" target="_blank"><i class="fa fa-google-plus"></i></a>
			</div>
			<div class="searchbtn clear">
			<form action="search.php" method="get">
				<input type="text" name="search" placeholder="Search keyword..."/>
				<input type="submit" value="Search"/>
			</form>
			</div>
		</div>
	</div>
<div class="navsection templete">
	<ul>

<?php
$path = $_SERVER['SCRIPT_FILENAME'];
$currentPage = basename($path, '.php');   
?>

		<li><a <?php if ($currentPage=='index') {echo "id ='active'";}  ?> href="index.php" >Home</a></li>

		<?php
			if ($nav) {
				while ($value=$nav->fetch_assoc()) {
		?>
			<li><a 
			<?php   
				if (isset($_GET['pageid']) && $_GET['pageid'] == $value['id']) {
					echo "id='active'";
				}
			?>href="page.php?pageid=<?php echo $value['id']; ?>" ><?php echo $value['title']; ?></a></li>
			<?php } }  ?>
		<li><a <?php if ($currentPage == 'contact') {echo "id ='active'";} ?> href="contact.php">Contact</a></li>
	</ul>
</div>

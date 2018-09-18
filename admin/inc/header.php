<?php
    include '../lib/Session.php';
    Session::checkSession();

    $user_id = Session::get('userId');
    $_name = Session::get('userName');
    $user_name = Session::get('username');
    $user_role = Session::get('userRole');
?>


<?php ob_start();  ?>
<?php include '../config/config.php' ?>
<?php include '../lib/Database.php' ?>

<?php include '../helpers/Format.php' ?>
<?php $db = new Database(); $fm = new Format(); ?>



<?php
    //set headers to NOT cache a page
    header ("Cache-Control: no-cache, must-revalidate"); //HTTP 1.1
    header("Pragma: no-cache"); //HTTP 1.0
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); 
    // Date in the past
    //or, if you DO want a file to cache, use:
    header("Cache-Control: max-age=2592000"); 
    //30days (60sec * 60min * 24hours * 30days)
?>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title> Admin</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/text.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/grid.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/layout.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/nav.css" media="screen" />
    <link href="css/table/demo_page.css" rel="stylesheet" type="text/css" />

    <!-- BEGIN: load jquery -->
    <script src="js/jquery-1.6.4.min.js" type="text/javascript"></script>
    <!-- <script src="js/jquery.min.js" type="text/javascript"></script> -->
    <script type="text/javascript" src="js/jquery-ui/jquery.ui.core.min.js"></script>
    <script src="js/jquery-ui/jquery.ui.widget.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui/jquery.ui.accordion.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui/jquery.effects.core.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui/jquery.effects.slide.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui/jquery.ui.mouse.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui/jquery.ui.sortable.min.js" type="text/javascript"></script>
    <script src="js/table/jquery.dataTables.min.js" type="text/javascript"></script>
<!-- tinymce -->
    <script src="js/tinymce/js/tinymce/tinymce.min.js"></script>
    <script>
      tinymce.init({
            forced_root_block : "",
            selector: '.tinymce',
            theme: 'modern',
            width: 1000,
            height: 220,
            valid_elements: "*[*]",
            plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor'
            ],
            content_css: 'css/content.css',
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
        });
    </script>






    <!-- END: load jquery -->
    <script src="js/setup.js" type="text/javascript"></script>
	 <script type="text/javascript">
        $(document).ready(function () {
            setupLeftMenu();
		    setSidebarHeight();
        });
    </script>


</head>
<body>
    <div class="container_12">
        <div class="grid_12 header-repeat">
            <div id="branding">
                <div class="floatleft logo">
                    <img src="img/livelogo.png" alt="Logo" />
				</div>
				<div class="floatleft middle">
					<h1>Training with live project</h1>
					<p>www.trainingwithliveproject.com</p>
				</div>

<?php
    if (isset($_GET['action']) && $_GET['action'] == 'logout') {
        Session::sessionDestroy();
    }
?>

                <div class="floatright">
                    <div class="floatleft">
                        <img src="img/img-profile.jpg" alt="Profile Pic" /></div>
                    <div class="floatleft marginleft10">
                        <ul class="inline-ul floatleft">
                            <li>Hello <?php echo $user_name;?></li>
                            <li><a href="?action=logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
        <div class="clear">
        </div>
        <div class="grid_12">
            <ul class="nav main">
                <li class="ic-dashboard"><a href="index.php"><span>Dashboard</span></a> </li>
                <li class="ic-form-style"><a href="profile.php"><span>User Profile</span></a></li>
                <li class="ic-typography"><a href="changepassword.php"><span>Change Password</span></a></li>
                <?php if ($user_role == '0') { ?>
                    <li class="ic-grid-tables"><a href="inbox.php"><span>Inbox<?php 
                    $sql = "select * from tbl_contact where status=0 order by id DESC";
                    $result = $db->select($sql);
                    if ($result) {
                        $count = mysqli_num_rows($result);
                        echo '(' . $count . ')';
                    }
                ?>
			        </span></a></li>
                <?php  } ?>  

                <li class="ic-charts"><a href="../index.php"><span>Visit Website</span></a></li>


                <?php if ($user_role == '0'){ ?>
                    <li class="ic-charts"><a href = "adduser.php"><span> Add User </span></a></li>
                <?php } ?>

                <li class="ic-charts"><a href="userlist.php"><span>User List</span></a></li>
            </ul>
        </div>
        <div class="clear">
        </div>
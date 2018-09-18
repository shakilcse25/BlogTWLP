
        <div class="grid_2">
            <div class="box sidemenu">
                <div class="block" id="section-menu">
                    <ul class="section menu">
                <li><a class="menuitem">Site Option</a>
                <?php if ($user_role == '0') { ?>
                    <ul class="submenu">
                    <li><a href="titleslogan.php">Title & Slogan</a></li>
                    <li><a href="social.php">Social Media</a></li>
                    <li><a href="copyright.php">Copyright</a></li>
                    <li><a href="theme.php">Theme</a></li>
                     </ul>
                <?php } ?>

                                
                    
                        </li>
						
                         <li><a class="menuitem">Pages</a>
                            <ul class="submenu">

                        <?php if ($user_role == '0') { ?>
                            <li><a href="addpage.php">New Page</a></li>
                        <?php } ?>

                                

                    <?php
                        $sql = "select * from tbl_page";
                        $data = $db->select($sql);
                        if($data){
                            while ($value = $data->fetch_assoc()) {

                    ?>
                                <li><a href="page.php?pageid=<?php echo $value['id']; ?>"><?php echo $value['title'] ?></a></li>
                    
                    <?php
                            }
                        }   
                    ?>

                            </ul>
                        </li>
                        <li><a class="menuitem">Category Option</a>
                            <ul class="submenu">

                        <?php if ($user_role == '0') { ?>
                                <li><a href="addcat.php">Add Category</a> </li>
                        <?php } ?>
                                <li><a href="catlist.php">Category List</a> </li>
                            </ul>
                        </li>
                        <li><a class="menuitem">Post Option</a>
                            <ul class="submenu">
                                <li><a href="addpost.php">Add Post</a> </li>
                                <li><a href="postlist.php">Post List</a> </li>
                            </ul>
                        </li>

                        <li><a class="menuitem">Slider Option</a>
                            <ul class="submenu">
                                <li><a href="addslider.php">Add Slider</a> </li>
                                <li><a href="sliderlist.php">Slider List</a> </li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
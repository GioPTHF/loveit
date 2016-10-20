<?php
session_start();
include('../php/connect.php');
  $query = "SELECT * FROM adminuser WHERE idAdmin = ".$_SESSION['idAdmin'];
  $result = mysql_query($query,connect::connection()) or die(mysql_error());
  $line = mysql_fetch_array($result);
?>
<div class="barTop" style="">
	<button id="menuha" type="button" class="btn btn-default" aria-label="Left Align" style="margin: 20px; margin-left:10px;">
		<span class="glyphicon glyphicon-menu-hamburger icon-class" aria-hidden="true">
	</button>
  <div class="dropdown" style="margin: 20px; margin-right: 80px;">
    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"><?= $line['adminName'] ?>
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" class="logout" tabindex="-1" href="#">Log Out <span style="margin-left: 1vw;" class="glyphicon glyphicon-log-out"></span></a></li>
    </ul>
  </div>
</div>

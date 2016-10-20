<?php
	require_once('connect.php');
	$username = 'admin';
	$password = 'admin';
	$passwordhash = password_hash($password, PASSWORD_DEFAULT);
	$query = "INSERT INTO adminuser (adminName, adminPassword, adminLastConnection) VALUES ('$username', '$passwordhash', '0000-00-00 00:00:00')";
	$result = mysql_query($query,Connect::connection()) or die(mysql_error());

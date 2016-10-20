<?php
	include('connect.php');

	$username = $_POST['username'];
	$password = $_POST['password'];

	$query = "SELECT * FROM adminuser WHERE adminName = '$username'";
	$result = mysql_query($query,connect::connection()) or die(mysql_error());
	if(mysql_num_rows($result) > 0){
		$find = false;
		while($line = mysql_fetch_array($result)){
			if(password_verify($password, $line['adminPassword'])){
				$find = true;
				date_default_timezone_set('America/Mexico_City');
				$lastDate = date("Y-m-d H:i:s");
				$query2 = "UPDATE adminuser SET adminLastConnection = '$lastDate' WHERE idAdmin = ".$line['idAdmin'];
				$result2 = mysql_query($query2,connect::connection()) or die(mysql_error());
				session_start();
				$_SESSION['idAdmin'] = $line['idAdmin'];
			}
		}
		if($find)
			echo 1;
		else
		 echo -1;
	}else{
		echo 0;
	}

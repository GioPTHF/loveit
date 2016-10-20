<?php
	class Connect{
		public function connection(){
			$connection = mysql_connect("localhost", "root", "") or die(mysql_error());
			mysql_query("SET NAMES 'utf8'");
			mysql_select_db("loveit") or die(mysql_error());
			return $connection;
		}
	}
?>

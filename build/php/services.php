<?php
	if(isset($_GET['namefunction'])){
		include("connect_bd.php");
		// connect_base_de_datos();
		$namefunction = $_GET['namefunction'];
		switch ($namefunction) {
			case 'getListSpaces':
				getListSpaces();
				break;
		}
	}

	function getListSpaces() {
		$queryCat = "SELECT * FROM Espacios";
		$resultCat = mysql_query($queryCat,Conectar::con()) or die(mysql_error());
		$arrayDataCat = array();
		$arrayDataSubCat = array();
		while($lineCat = mysql_fetch_array($resultCat)){

			$querySubCat = "SELECT * FROM imagenesespacios WHERE Espacios_idEspacios = ".$lineCat['idEspacios'];
			$resultSubCat = mysql_query($querySubCat,Conectar::con()) or die(mysql_error());

			while($lineSubCat = mysql_fetch_array($resultSubCat)){
			  $lineSubCatName = $lineSubCat['nombreImagen'];
			  array_push($arrayDataSubCat, $lineSubCatName);
			  unset($lineSubCatName);
			}

			$dataAuxCat = array(
				'idEspacios' => $lineCat['idEspacios'],
				'nombreEspacio' => $lineCat['Nombre'],
				'descripcion' => $lineCat['Descripcion'],
				'imagenes' => $arrayDataSubCat
			);
			array_push($arrayDataCat, $dataAuxCat);
			unset($dataAuxCat);
			unset($arrayDataSubCat);
			$arrayDataSubCat = array();

		}
		print_r(json_encode($arrayDataCat));
	}

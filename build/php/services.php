<?php
	if(isset($_GET['namefunction'])){
		include("connect_bd.php");
		// connect_base_de_datos();
		$namefunction = $_GET['namefunction'];
		switch ($namefunction) {
			case 'getListSpaces':
				getListSpaces();
				break;
			case 'getListSlider':
				getListSlider();
				break;
			case 'getListHabitaciones':
				getListHabitaciones();
				break;				
			case 'getListAmenidades':
				getListAmenidades();
				break;
		}
	}

	function getListSpaces() {
		$queryCat = "SELECT * FROM espacios";
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
	function getListSlider(){
	      $query = "SELECT * FROM sliderhome ORDER BY idSliderhome DESC";
	      $result = mysql_query($query,Conectar::con()) or die(mysql_error());
	      $listSlider = array();
	      while($line = mysql_fetch_array($result)){
	        $listSlider[] = array(
	          'idSliderhome' => $line['idSliderhome'],
	          'idNombreImagen' => $line['NombreImagen'],
	          'idUrl' => $line['Url']

	        );
	      }
	      print_r(json_encode($listSlider));
	    }

	function getListHabitaciones() {
		$queryCat = "SELECT * FROM Habitaciones";
		$resultCat = mysql_query($queryCat,Conectar::con()) or die(mysql_error());
		$arrayDataCat = array();
		$arrayDataSubCat = array();
		while($lineCat = mysql_fetch_array($resultCat)){
			$querySubCat = "SELECT * FROM imageneshabitaciones WHERE Habitaciones_idHabitaciones = ".$lineCat['idHabitaciones'];	
			$resultSubCat = mysql_query($querySubCat,Conectar::con()) or die(mysql_error());
			while($lineSubCat = mysql_fetch_array($resultSubCat)){
			  $lineSubCatName = $lineSubCat['nombreImagen'];
			  array_push($arrayDataSubCat, $lineSubCatName);
			  unset($lineSubCatName);
			}
			$dataAuxCat = array(
				'idHabitaciones' => $lineCat['idHabitaciones'],
				'nombreHabitacion' => $lineCat['Nombre'],
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

	function getListAmenidades() {
		$queryCat = "SELECT * FROM amenidades";
		$resultCat = mysql_query($queryCat,Conectar::con()) or die(mysql_error());
		$arrayDataCat = array();
		$arrayDataSubCat = array();
		while($lineCat = mysql_fetch_array($resultCat)){

		$querySubCat = "SELECT * FROM imagenesamenidades WHERE Amenidades_idAmenidades = ".$lineCat['idAmenidades'];
		$resultSubCat = mysql_query($querySubCat,Conectar::con()) or die(mysql_error());

		while($lineSubCat = mysql_fetch_array($resultSubCat)){
		 $lineSubCatName = $lineSubCat['nombreImagen'];
		 array_push($arrayDataSubCat, $lineSubCatName);
		 unset($lineSubCatName);
		}

		$dataAuxCat = array(
		'idAmenidades' => $lineCat['idAmenidades'],
		'nombreAmenidad' => $lineCat['Nombre'],
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


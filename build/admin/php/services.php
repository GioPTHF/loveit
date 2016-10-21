<?php
  require_once('./connect.php');
  class Services extends Connect{
    function __construct($nameObject){
      $this->$nameObject();
    }
    /*Mostrar habitaciones*/
    private function getProducts(){
      $query = "SELECT 
                  habitaciones.idHabitaciones,habitaciones.Nombre,habitaciones.Descripcion,
                  imageneshabitacion.nombreImagen, tipohabitacion.NombreHabitacion, tipohabitacion.idtipoHabitacion 
          FROM habitaciones 
          INNER JOIN imageneshabitacion ON imageneshabitacion.Habitaciones_idHabitaciones=habitaciones.idHabitaciones
          INNER JOIN tipohabitacion ON tipohabitacion.idtipoHabitacion=habitaciones.tipoHabitacion_idtipoHabitacion
          GROUP by habitaciones.idHabitaciones
          ORDER BY `idHabitaciones` ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listProduct = array();
          while($line = mysql_fetch_array($result)){
            $listProduct[] = array(
              'idProduct' => $line['idHabitaciones'],
              'idNombre' => $line['Nombre'],
              'idDescripcion' => $line['Descripcion'],
              'productImage' => $line['nombreImagen'],
              'idTipo' => $line['NombreHabitacion'],
              'categoryName' => $line['idtipoHabitacion']
        );
      }
      print_r(json_encode($listProduct));
    }
    /*Mostrar amenidades*/
    private function getAmenidades(){
      $query = "SELECT 
                  amenidades.idAmenidades,amenidades.Nombre,amenidades.Descripcion,imagenesamenidades.nombreImagen
          FROM amenidades 
          INNER JOIN imagenesamenidades ON imagenesamenidades.Amenidades_idAmenidades=amenidades.idAmenidades
          GROUP by amenidades.idAmenidades
          ORDER BY `idAmenidades` ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listAmenidad = array();
          while($line = mysql_fetch_array($result)){
            $listAmenidad[] = array(
              'idAmenidades' => $line['idAmenidades'],
              'idANombre' => $line['Nombre'],
              'idADescripcion' => $line['Descripcion'],
              'productImage' => $line['nombreImagen']
        );
      }
      print_r(json_encode($listAmenidad));
    }
    /*Mostrar espacios*/
    private function getEspacios(){
      $query = "SELECT 
                  espacios.idEspacios,espacios.Nombre,espacios.Descripcion,imagenesespacios.nombreImagen
          FROM espacios 
          INNER JOIN imagenesespacios ON imagenesespacios.Espacios_idEspacios=espacios.idEspacios
          GROUP by espacios.idEspacios
          ORDER BY `idEspacios` ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listEspacios = array();
          while($line = mysql_fetch_array($result)){
            $listEspacios[] = array(
              'idEspacios' => $line['idEspacios'],
              'idENombre' => $line['Nombre'],
              'idEDescripcion' => $line['Descripcion'],
              'productImage' => $line['nombreImagen']
        );
      }
      print_r(json_encode($listEspacios));
    }
    /*Mostrar imagenes de habitaciones*/
    private function getProductsimg(){

      $query = "SELECT imageneshabitacion.idimagenesHabitacion,imageneshabitacion.nombreImagen, habitaciones.Nombre,habitaciones.idHabitaciones 
          FROM imageneshabitacion 
          INNER JOIN habitaciones ON habitaciones.idHabitaciones=imageneshabitacion.Habitaciones_idHabitaciones
          INNER JOIN tipohabitacion ON tipohabitacion.idtipoHabitacion=habitaciones.tipoHabitacion_idtipoHabitacion 
          /*WHERE imageneshabitacion.Habitaciones_idHabitaciones = idProduct*/
          GROUP by imageneshabitacion.idimagenesHabitacion
          ORDER BY `idimagenesHabitacion` ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listProductimg = array();
          while($line = mysql_fetch_array($result)){
            $listProductimg[] = array(
              'idImagen' => $line['idimagenesHabitacion'],
              'idNombreImagen' => $line['nombreImagen'],
              'idNombre' => $line['Nombre'],
              'idHabita' => $line['idHabitaciones']
        );
      }
      print_r(json_encode($listProductimg));
    }
    /*Mostrar imagenes de amenidades*/
    private function getAmenidadesimg(){

      $query = "SELECT imagenesamenidades.idimagenesAmenidades,imagenesamenidades.nombreImagen, amenidades.Nombre,amenidades.idAmenidades 
          FROM imagenesamenidades 
          INNER JOIN amenidades ON amenidades.idAmenidades=imagenesamenidades.Amenidades_idAmenidades
          GROUP by imagenesamenidades.idimagenesAmenidades
          ORDER BY `idimagenesAmenidades` ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listProductimg = array();
          while($line = mysql_fetch_array($result)){
            $listProductimg[] = array(
              'idImagen' => $line['idimagenesAmenidades'],
              'idNombreImagen' => $line['nombreImagen'],
              'idNombre' => $line['Nombre'],
              'idHabita' => $line['idAmenidades']
        );
      }
      print_r(json_encode($listProductimg));
    }
    /*Mostrar imagenes de espacios*/
    private function getEspaciosimg(){

      $query = "SELECT imagenesespacios.idimagenesEspacios,imagenesespacios.nombreImagen, espacios.Nombre,espacios.idEspacios 
          FROM imagenesespacios 
          INNER JOIN espacios ON espacios.idEspacios=imagenesespacios.Espacios_idEspacios
          GROUP by imagenesespacios.idimagenesEspacios
          ORDER BY `idimagenesEspacios` ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listEspaciosimg = array();
          while($line = mysql_fetch_array($result)){
            $listEspaciosimg[] = array(
              'idImagen' => $line['idimagenesEspacios'],
              'idNombreImagen' => $line['nombreImagen'],
              'idNombre' => $line['Nombre'],
              'idEspacios' => $line['idEspacios']
        );
      }
      print_r(json_encode($listEspaciosimg));
    }  
    /*Mostrar tipos de habitacion*/
    private function getCategories(){
      $query = "SELECT * FROM tipohabitacion ORDER BY idtipoHabitacion DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listCategory = array();
      while($line = mysql_fetch_array($result)){
        $listCategory[] = array(
          'idtipoHabitacion' => $line['idtipoHabitacion'],
          'idnombreHabitacion' => $line['NombreHabitacion']
        );
      }
      print_r(json_encode($listCategory));
    }
    /*Mostrar sldiers*/
    private function getSlider(){
      $query = "SELECT * FROM sliderhome ORDER BY idSliderhome DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
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

  }
  $nameObject = $_GET['namefunction'];
  new Services($nameObject);

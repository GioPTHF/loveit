<?php
  require_once('./connect.php');
  class Functions extends Connect{
    function __construct($nameObject){
      $this->$nameObject();
    }
    private function sessionDestroy(){
      session_start();
      session_destroy();
    }
    private function generateUrlString($string){
      $string = trim($string);
      $string = str_replace(
          array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
          array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'),
          $string
      );
      $string = str_replace(
          array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
          array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'),
          $string
      );
      $string = str_replace(
          array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
          array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'),
          $string
      );
      $string = str_replace(
          array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
          array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'),
          $string
      );
      $string = str_replace(
          array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
          array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'),
          $string
      );
      $string = str_replace(
          array('ñ', 'Ñ', 'ç', 'Ç'),
          array('n', 'N', 'c', 'C'),
          $string
      );
      //Esta parte se encarga de eliminar cualquier caracter extraño
      $string = str_replace(
          array('¨', 'º', '-', '~',
               '#', '@', '|', '!', '"',
               "·", "$", "%", "&", "/",
               "(", ")", "?", "'", "¡",
               "¿", "[", "^", "<code>", "]",
               "+", "}", "{", "¨", "´",
               ">", "<", ";", ",", ":",
               "."),
          '',
          $string
      );
      return $string;
    }
    private function getNameImage($dataFiles, $key){
      $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < 6; $i++)
          $randomString .= $characters[rand(0, $charactersLength - 1)];
      $ext = end((explode(".", $dataFiles["setImage"]["name"][$key])));
      $fileName = date("YmdHis").$randomString.".".$ext;
      return $fileName;
    }
    /*Agregar habitaciones*/
    private function addNewProduct(){
      parse_str($_POST['data'], $data);
       $query = "INSERT INTO habitaciones (Nombre,Descripcion,tipoHabitacion_idtipoHabitacion) 
       VALUES ('".$data['productName']."', '".$data['productDescripcion']."',".$data['productCategory'].")";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());           
       $rs=mysql_query("SELECT MAX(idHabitaciones) AS idHabitaciones FROM habitaciones")or die(mysql_error());
       if($row=mysql_fetch_row($rs)){
            $id_habi=trim($row[0]);
           }      

      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/products/".$fileName);
       /*Hasta aqui llega la función*/
       $query = "INSERT INTO imageneshabitacion VALUES (null,'".$fileName."','".$id_habi."')";           
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }   
    }
    /*Agregar img habitaciones*/
    private function addNewProductimg(){
      parse_str($_POST['data'], $data);  
      $idHabitacion=$data[idHabitacion];
      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/products/".$fileName);
       $query = "INSERT INTO imageneshabitacion VALUES (null,'".$fileName."','".$idHabitacion."')";           
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }  
    }
    /*Borrar habitacion*/
    private function removeProduct(){
      $idProduct = $_POST['idProduct'];
      $query = "SELECT Habitaciones_idHabitaciones FROM imageneshabitacion WHERE Habitaciones_idHabitaciones =".$idProduct;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $productImage = $line['nombreImagen'];
      unlink("../src/images/products/".$productImage);

      $query = "DELETE FROM imageneshabitacion where Habitaciones_idHabitaciones = ".$idProduct;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $query = "DELETE FROM habitaciones where idHabitaciones = ".$idProduct;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Borrar img de habitacion*/
    private function removeProductimg(){
      $idProduct = $_POST['idProduct'];
      $query = "SELECT nombreImagen FROM imageneshabitacion WHERE idimagenesHabitacion =".$idProduct;
      $result = mysql_query($query, $this->connection()); 
      $line = mysql_fetch_array($result);  
      $productImage = $line['nombreImagen'];        
      unlink("../src/images/products/".$productImage);
      $query = "DELETE FROM imageneshabitacion where  idimagenesHabitacion= ".$idProduct;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }    
    /*Actualizar habitacion*/
    private function modifyProduct(){
      parse_str($_POST['data'], $data);
      $query = "UPDATE habitaciones SET Nombre = '".$data['productName']."',Descripcion = '".$data['productDescription']."' ,tipoHabitacion_idtipoHabitacion = ".$data['productCategory']." WHERE idHabitaciones =  ".$data['productId'];
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Actualizar img, no es útil*/
    private function modifyProductImage(){
      $productId = $_POST['productId'];
      $query = "SELECT nombreImagen FROM imageneshabitacion WHERE idimagenesHabitacion = ".$productId;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $productImage = $line['nombreImagen'];
      unlink("../src/images/products/".$productImage);
      foreach ($_FILES['setImage']["name"] as $key => $value) {
          $fileName = $this->getNameImage($_FILES, $key);
          $fileType = $_FILES["setImage"]["type"][$key];
          $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
          move_uploaded_file($fileTemp, "../src/images/products/".$fileName);
          $query = "UPDATE imageneshabitacion SET nombreImagen = '".$fileName."' WHERE idimagenesHabitacion = ".$productId;
          $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }
    }
    /*Añadir tipos de habitación*/    
    private function addCategory(){
      parse_str($_POST['data'], $data);
      $categoryName = $data['categoryName'];
      $query = "INSERT INTO tipohabitacion (NombreHabitacion) VALUES ('".$categoryName."')";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Apartado para borrar los tipos de habitacion*/    
    private function removeCategory(){
      $idCategory = $_POST['idCategory'];
      $query = "DELETE FROM tipohabitacion WHERE idtipoHabitacion = ".$idCategory;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Agregar amenidades*/
    private function addNewAmenidad(){
      parse_str($_POST['data'], $data);
       $query = "INSERT INTO amenidades
       VALUES (Null,'".$data['productName']."', '".$data['productDescripcion']."')";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());           
       $rs=mysql_query("SELECT MAX(idAmenidades) AS idAmenidades FROM amenidades")or die(mysql_error());
       if($row=mysql_fetch_row($rs)){
            $id_habi=trim($row[0]);
           }      

      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/amenidades/".$fileName);
       /*Hasta aqui llega la función*/
       $query = "INSERT INTO imagenesamenidades VALUES (null,'".$fileName."','".$id_habi."')";           
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }   
    }
    /*Agregar img amenidades*/
    private function addNewAmenidadimg(){
      parse_str($_POST['data'], $data);  
      $idAmenidad=$data[idAmenidad];
      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/amenidades/".$fileName);
       //Hasta aqui llega la función
       $query = "INSERT INTO imagenesamenidades VALUES (null,'".$fileName."','".$idAmenidad."')";           
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }  
    }    
    /*Borrar amenidad*/
    private function removeAmenidad(){
      $idProduct = $_POST['idAme'];
      $query = "SELECT Amenidades_idAmenidades FROM imagenesamenidades WHERE Amenidades_idAmenidades =".$idProduct;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $productImage = $line['nombreImagen'];
      unlink("../src/images/amenidades/".$productImage);

      $query = "DELETE FROM imagenesamenidades where Amenidades_idAmenidades = ".$idProduct;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $query = "DELETE FROM amenidades where idAmenidades = ".$idProduct;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Borrar img amenidad*/
    private function removeAmenidadimg(){
      $idAmenidad = $_POST['idAmenidad'];
      $query = "SELECT nombreImagen FROM imagenesamenidades WHERE idimagenesAmenidades =".$idAmenidad;
      $result = mysql_query($query, $this->connection()); 
      $line = mysql_fetch_array($result);  
      $amenidadImage = $line['nombreImagen'];        
      unlink("../src/images/amenidades/".$amenidadImage);
      $query = "DELETE FROM imagenesamenidades where  idimagenesAmenidades= ".$idAmenidad;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }      
    /*Modificar amenidad*/
    private function modifyAmenidad(){
      parse_str($_POST['data'], $data);
      $query = "UPDATE amenidades SET Nombre = '".$data['productName']."',Descripcion = '".$data['productDescription']."'  WHERE idAmenidades =  ".$data['productId'];
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Agregar espacios*/
    private function addNewEspacios(){
      parse_str($_POST['data'], $data);
       $query = "INSERT INTO espacios
       VALUES (Null,'".$data['productName']."', '".$data['productDescripcion']."')";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());           
       $rs=mysql_query("SELECT MAX(idEspacios) AS idEspacios FROM espacios")or die(mysql_error());
       if($row=mysql_fetch_row($rs)){
            $id_espa=trim($row[0]);
           }      

      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/espacios/".$fileName);
       /*Hasta aqui llega la función*/
       $query = "INSERT INTO imagenesespacios VALUES (null,'".$fileName."','".$id_espa."')";           
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }   
    }
    /*Agregar img espacio*/
    private function addNewEspaciosimg(){
      parse_str($_POST['data'], $data);  
      $idEspacios=$data[idEspacios];
      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/espacios/".$fileName);
       //Hasta aqui llega la función
       $query = "INSERT INTO imagenesespacios VALUES (null,'".$fileName."','".$idEspacios."')";           
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }  
    }    
    /*Borrar espacio*/
    private function removeEspacios(){
      $idEspacios = $_POST['idEspacio'];
      $query = "SELECT Espacios_idEspacios FROM imagenesespacios WHERE Espacios_idEspacios =".$idEspacios;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $productImage = $line['nombreImagen'];
      unlink("../src/images/espacios/".$productImage);

      $query = "DELETE FROM imagenesespacios where Espacios_idEspacios = ".$idEspacios;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $query = "DELETE FROM espacios where idEspacios = ".$idEspacios;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    /*Borrar img espacio*/
    private function removeEspaciosimg(){
      $idEspacios = $_POST['idEspacio'];
      $query = "SELECT nombreImagen FROM imagenesespacios WHERE idimagenesEspacios =".$idEspacios;
      $result = mysql_query($query, $this->connection()); 
      $line = mysql_fetch_array($result);  
      $amenidadImage = $line['nombreImagen'];        
      unlink("../src/images/espacios/".$amenidadImage);
      $query = "DELETE FROM imagenesespacios where  idimagenesEspacios= ".$idEspacios;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }      
    /*Modificar espacio*/
    private function modifyEspacios(){
      parse_str($_POST['data'], $data);
      $query = "UPDATE espacios SET Nombre = '".$data['productName']."',Descripcion = '".$data['productDescription']."'  WHERE idEspacios =  ".$data['productId'];
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }

    private function sliderGallerySpaces(){
      print_r($_POST['idEspacio']);
      $query = "SELECT * FROM imagenesespacios WHERE Espacios_idEspacios = '".$_POST['idEspacio']."'";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      while ($row = mysql_fetch_array($result)) {
        echo '<div class="swiper-slide"><img src="./admin/src/images/espacios/'.$row['nombreImagen'].'"></div>';
      }
    }
    private function addSlider(){
      parse_str($_POST['data'], $data);  
      foreach ($_FILES['setImage']["name"] as $key => $value) {
       $fileName = $this->getNameImage($_FILES, $key);       
       $fileType = $_FILES["setImage"]["type"][$key];
       $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
       move_uploaded_file($fileTemp, "../src/images/sliderhome/".$fileName);
       //Hasta aqui llega la función
       $query = "INSERT INTO sliderhome VALUES (null,'".$fileName."','".$data['sliderUrl']."')";       
       $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }  
    }    
    private function removeSlider(){
      $idSliderhome = $_POST['idSlider'];   
      $query = "SELECT NombreImagen FROM sliderhome WHERE idSliderhome =".$idSliderhome;
      $result = mysql_query($query, $this->connection()); 
      $line = mysql_fetch_array($result);  
      $productImage = $line['NombreImagen'];          
      unlink("../src/images/sliderhome/".$productImage);
      $query = "DELETE FROM sliderhome where  idSliderhome= ".$idSliderhome;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }         

  }
  $nameObject = $_POST['namefunction'];
  new Functions($nameObject);

<?php
  require_once('./connect.php');
  class Services extends Connect{
    function __construct($nameObject){
      $this->$nameObject();
    }
    private function getImagesSliderHome(){
      $query = "SELECT * FROM homebanner ORDER BY idHomeBanner DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listImages = array();
      while($line = mysql_fetch_array($result)){
        $listImages[] = array(
          'idHomeBanner' => $line['idHomeBanner'],
          'bannerName' => $line['bannerName'],
          'bannerUrl' => $line['bannerUrl'],
          'bannerImageName' => $line['bannerImageName']
        );
      }
      print_r(json_encode($listImages));
    }
    private function getProducts(){
      $query = "SELECT * FROM product
      INNER JOIN category ON product.idCategory = category.idCategory
      INNER JOIN subcategory ON product.idSubcategory = subcategory.idSubcategory
      ORDER BY idProduct DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listProduct = array();
      while($line = mysql_fetch_array($result)){
        $listProduct[] = array(
          'idProduct' => $line['idProduct'],
          'productName' => $line['productName'],
          'productImage' => $line['productImage'],
          'categoryName' => $line['categoryName'],
          'subcategoryName' => $line['subcategoryName'],
          'idCategory' => $line['idCategory'],
          'idSubcategory' => $line['idSubcategory'],
          'productUrl' => $line['productUrl'],
          'productDescription' => $line['productDescription']
        );
      }
      print_r(json_encode($listProduct));
    }
    private function getCategories(){
      $query = "SELECT * FROM category ORDER BY idCategory DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listCategory = array();
      while($line = mysql_fetch_array($result)){
        $listCategory[] = array(
          'idCategory' => $line['idCategory'],
          'categoryName' => $line['categoryName'],
          'categoryUrl' => $line['categoryUrl']
        );
      }
      print_r(json_encode($listCategory));
    }
    private function getSubCategories(){
      $query = "SELECT * FROM subcategory
      INNER JOIN category ON category.idCategory = subcategory.idCategory
      ORDER BY idSubcategory DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listSubCategory = array();
      while($line = mysql_fetch_array($result)){
        $listSubCategory[] = array(
          'idSubcategory' => $line['idSubcategory'],
          'idCategory' => $line['idCategory'],
          'subcategoryName' => $line['subcategoryName'],
          'subcategoryImage' => $line['subcategoryImage'],
          'subcategoryDescription' => $line['subcategoryDescription'],
          'categoryName' => $line['categoryName'],
          'subcategoryUrl' => $line['subcategoryUrl']
        );
      }
      print_r(json_encode($listSubCategory));
    }
    private function getBlogTips(){
      $query = "SELECT * FROM blogtip ORDER BY idBlogtip DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listBlog = array();
      while($line = mysql_fetch_array($result)){
        $listBlog[] = array(
          'idBlogtip' => $line['idBlogtip'],
          'blogtipName' => $line['blogtipName'],
          'blogtipDate' => $line['blogtipDate'],
          'blogtipImage' => $line['blogtipImage'],
          'blogtipNote' => $line['blogtipNote']
        );
      }
      print_r(json_encode($listBlog));
    }
    private function getImagesLibrary(){
      $prueba = 1;
      $query = "SELECT nombreImagen FROM imageneshabitacion where Habitaciones_idHabitaciones='$prueba'/*Este dato tiene que ser el id guardado en una variable a traves de la imagen cuando se le da click*/" ;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listImages = array();
      while($line = mysql_fetch_array($result)){
        $listImages[] = array(
          'nombreImagen' => $line['nombreImagen']
        );
      }
      print_r(json_encode($listImages));
    }

    private function getNombre(){
        $prueba1 = 1;
        $query = "SELECT Nombre FROM tipohabitacion where idtipoHabitacion='$prueba1'/*Este dato tiene que ser el id guardado en una variable a traves de la imagen cuando se le da click*/" ;
        $result = mysql_query($query, $this->connection()) or die(mysql_error());
        $listImages = array();
        while($line = mysql_fetch_array($result)){
          $listNombre[] = array(
            'Nombre' => $line['Nombre']
          );
      }
      print_r(json_encode($listNombre));
    }
    private function getDescripcion(){
        $prueba2 = 1;
        $query = "SELECT Descripcion FROM habitaciones where idHabitaciones='$prueba2'/*Este dato tiene que ser el id guardado en una variable a traves de la imagen cuando se le da click*/" ;
        $result = mysql_query($query, $this->connection()) or die(mysql_error());
        $listDescripcion = array();
        while($line = mysql_fetch_array($result)){
          $listDescripcion[] = array(
            'Descripcion' => $line['Descripcion']
          );
      }
      print_r(json_encode($listDescripcion));
    }    


    private function getImagesHabitacion(){
      $query = "SELECT * FROM imageneshabitacion";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listImages = array();
      while($line = mysql_fetch_array($result)){
        $listImages[] = array(
          'idimagenesHabitacion' => $line['idimagenesHabitacion'],
          'nombreImagen' => $line['nombreImagen'],
          'Habitaciones_idHabitaciones' =>$line['Habitaciones_idHabitaciones']
        );
      }
      print_r(json_encode($listImages));      

    }
  }
  $nameObject = $_GET['namefunction'];
  new Services($nameObject);

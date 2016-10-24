<?php
error_reporting(0); 

$nombre = $_POST['nombre'];
//$movil = $_POST['movil'];
//$movil_casa = $_POST['tel_casa']; 
$correo_electronico= $_POST['email']; 
$dudas = $_POST['dudas']; 
/*$nombre = 'Giovanni';
$movil = '33';
$movil_casa = '22'; 
$correo_electronico= 'micorreo@hotmail.com'; 
$dudas = 'Mis Dudas y/o comentarios';*/ 

$header = 'From: ' . $correo_electronico . ", de ".$nombre."\r\n"; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n"; 
//$mensaje .= "Número de cel " . $movil . " \r\n"; 
//$mensaje .= "Número de casa " . $movil_casa . " \r\n"; 
$mensaje .= "Dudas y/o comentarios " . $dudas . " \r\n";  

$mensaje .= "Enviado el " . date('d/m/Y', time()); 
 
$asunto = 'Contacto'; 
mail('ch_okis@hotmail.com', $asunto, utf8_decode($mensaje), $header);

//mail('karen@paratodohayfans.com', $asunto, utf8_decode($mensaje), $header);
//mail('topete@paratodohayfans.com', $asunto, utf8_decode($mensaje), $header);
//mail('gladysmartin.np@gmail.com', $asunto, utf8_decode($mensaje), $header); 
/*
echo 'mensaje enviado correctamente'; 
echo '<br>';
echo $mensaje; 
*/

?>

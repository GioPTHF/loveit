<?php

parse_str($_POST['data'],$formdata);

$nombre = $formdata['nombre'];
$correo_electronico= $formdata['correo']; 
$dudas = $formdata['dudas']; /*
$nombre = 'Giovanni';
$correo_electronico= 'micorreo@hotmail.com'; 
$dudas = 'Mis Dudas y/o comentarios';*/

$header = 'From: ' . $correo_electronico . ", de ".$nombre."\r\n"; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n"; 
$mensaje .= "Dudas y/o comentarios " . $dudas . " \r\n";  

$mensaje .= "Enviado el " . date('d/m/Y', time()); 
 
$asunto = 'Contacto'; 

mail('ch_okis@hotmail.com', $asunto, utf8_decode($mensaje), $header);
echo 'mensaje enviado correctamente'; 
echo '<br>';
echo $mensaje; 
?>

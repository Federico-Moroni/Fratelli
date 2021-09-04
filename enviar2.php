<?php
// Conecto mi form con el server a traves de los name
$name = $_POST ['name']
$email = $_POST ['email']
$phone = $_POST ['phone']
$message = $_POST ['message']

// Como funciona con el server
$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

// Como me a llegar el cuerpo del mail a mi, o sea lo que la gente escribió en el form
$mensaje = "Este mensaje fue enviado por " . $name . ",\r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Su telefono es: " . $phone . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'fede.moroni1993@gmail.com'; // El mail a donde van a llegar los mensajes
$asunto = 'Mensaje Fratelli';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:index.html');

?>

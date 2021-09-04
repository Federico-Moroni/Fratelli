<?php
// Conecto mi form con el server a traves de los name
$name = $_POST ['name']
$email = $_POST ['email']
$phone = $_POST ['phone']
$message = $_POST ['message']

// Como funciona con el server
$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

// Como me va llegar el cuerpo del mail a mi, o sea lo que la gente escribió en el form
$message = "Este mensaje fue enviado por " . $name . ",\r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "Su telefono es: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$message .= "Enviado el " . date('d/m/Y', time());

$para = 'fede.moroni1993@gmail.com'; // El mail a donde van a llegar los mensajes
$asunto = 'Mensaje Fratelli';

mail($para, $asunto, utf8_decode($message), $header);

header('Location:index.html');

?>

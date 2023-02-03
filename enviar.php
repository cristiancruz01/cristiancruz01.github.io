<?php
//llamando campos
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    header("Location: index.html" );
}
$nombre = $_POST['Nombre Completo'];
$telefono = $_POST['Telefono'];
$email = $_POST['Email'];
$asunto = $_POST['Asunto'];
$mensaje = $_POST['Mensaje'];
//datos correo
$destinatario = "cruz03christian@gmail.com";
$tema = "Contacto de portafolio";

$carta = "Nombre: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Email: $email \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $mensaje \n";

//Enviado Mensaje
mail('$destinatario, $tema, $carta');
header('Location:mensaje-de-envio.html');
?>
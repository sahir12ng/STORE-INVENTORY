<?php

include '../bd/olos.php';

$tdoc= $_POST ['t_doc'];
$id= $_POST ['documento'];
$nome= $_POST ['nombre'];
$nome2= $_POST ['2nombre'];
$pre=$_POST  ['pregunta'];
$res=$_POST ['respuesta'];
$apellio= $_POST ['apellido'];
$apellio2=$_POST ['2apellido'];
$tel=$_POST ['tel'];
$correo=$_POST ['correo'];
$user=$_POST ['usuario'];
$password=$_POST ['password'];


$sql ="insert into usuario
values ( '$tdoc', '$id', '$nome','$nome2','$apellio','$apellio2','$correo','$tel','$user',aes_encrypt('$password','clave'),'$pre','$res')";

try {
    $con->query($sql);
    print "<script> alert (\"Agregado existosamente.\");window.location='../html/registrar.html';</script>";
} catch (Exception $e){
    echo $e->getMessage();
}

?>
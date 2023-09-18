<?php

require_once 'crud_productos.php';
require_once 'conexion.php';

$db=database::conectar();

    if (isset($_REQUEST['action'])) 
    {    switch ($_REQUEST['action'])

        {
            case 'actualizar_producto':
            
            $update = new crud_productos();
            $update-> actualizar_producto($_POST["nom_prod"],$_POST["precio"],$_POST["cant_disp"],$_POST["prov"], $_POST['cod']);

            break;

            case 'insertar_prod':
            
            $insert=new crud_productos();
            $insert->insertar_producto($_POST["nom_prod"],$_POST["precio"],$_POST["cant_disp"],$_POST["prov"]);

            break;

            case 'eliminar_prod':
            $delete = new crud_productos();
            $delete-> borrar_producto($_GET['cod']);
        }
    }
?>
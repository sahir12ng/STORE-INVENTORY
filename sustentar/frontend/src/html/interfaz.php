<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/estilos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Glory:wght@300;400;700&display=swap">
    <title>Menu</title>
</head>
<body>
    <header class="container">
        <a href="inicio_sesion.php" class="cerrar-sesion-btn">Cerrar sesión</a>
    <div class="row">
            <div class="col2">
                <h1>¡Bienvenido</h1>
                <h2>a el menu de opciones!</h2>
                <p>Seleccione la opción a la que desea ingresar</p>
        </div>

    <div class="contenedor">
        <a href="inventario.php">
        <figure>
            <div class="card1">
            <img src="../img/inv_entrada.jpg" alt="inventario_entrada">
            </div>    
        <div class="capa">
            <h3><strong>Inventario de Entrada</strong></h3>
            <p>Visualice los productos existentes</p>
        </div>
        </figure>
    </a>
        <a href="inventario.php">
        <figure>
            <div class="card2">
            <img src="../img/inv_salida.jpg" alt="inventario_salida">
            </div>
            <div class="capa">
                    <h3><strong>Inventario de Salida</strong></h3>
                    <p>Visualice los productos disponibles</p>
            </div>
        </figure>
        </a>
        <a href="gestion.php">
        <figure>
            <div class="card3">
            <img src="../img/control_cuentas.jpg" alt="control_cuentas">
            </div>
        <div class="capa">
            <h3><strong>Control de Cuentas</strong></h3>
            <p>Gestione los usuarios del sistema</p>
        </div>
        </figure>
        </a>
        <a href="info.php">
        <figure>
            <div class="card4">
            <img src="../img/inf_personal.jpg" alt="inf_personal">
            </div>
        <div class="capa">
            <h3><strong>Información Personal</strong></h3>
            <p>Lea o actualice su información personal</p>
        </div>
        </figure>
    </a>
    </div>
    
</body>
</html>
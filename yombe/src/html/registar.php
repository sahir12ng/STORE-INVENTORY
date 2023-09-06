<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--especifica la versión del motor de renderizado de Internet Explorer (IE) que se debe utilizar para mostrar un sitio web-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página inventario">
    <meta name="keywords" content="Inventario, Organizar, Papeleria">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style_registro.css">
 
    <title>Registro-Store-Inventory</title>
</head>
<body>
        
        <section class="container">
            <div class="mt-3 p-4">
<!-- La clase "mt-3" aplica un margen superior al elemento div de 3 unidades 
(generalmente píxeles o rems). La clase "p-4" aplica un relleno interno (padding) 
al elemento div de 4 unidades.-->
            <div class="row">
<!-- establece un contenedor con ancho completo y un margen negativo en los lados 
para compensar los márgenes internos de las columnas que se pueden agregar a continuación. 
Las filas se utilizan para crear una estructura de cuadrícula flexible y sensible en una página web 
que puede ajustarse automáticamente según el tamaño de la pantalla o el dispositivo en el que se está 
viendo la página.-->
            <div class="col-12 bg-white rounded-top">
            <!-- establece una columna que ocupa todo el ancho disponible del contenedor padre-->   
            <!-- establece el fondo de la columna en blanco, mientras que la clase "rounded-top" aplica un borde redondeado en la esquina superior izquierda y derecha de la columna.--> 
                <h2 class="fw-bold text-center py-1 mt-4">¿Eres nuevo?<br>Regístrate <i class="fas fa-grin-wink"></i></h2>
            <!--establece el peso de la fuente en negrita (bold) para el texto del encabezado -->
            <!--centra el texto del encabezado horizontalmente en la página -->
            <!--establece un relleno interno (padding) vertical de 1 unidad y un margen superior de 4 unidades para el encabezado-->
            </div>

                <div class="col-6 bg-white p-5 pb-0">
            <!--"p-5" significa "padding-5", lo que se refiere a la cantidad de espacio de relleno que se agrega alrededor del contenido del elemento
            "pb-0" significa "padding-bottom-0", lo que se refiere a la cantidad de espacio de relleno que se agrega solo en la parte inferior del elemento, en este caso, se está estableciendo en cero-->        

                    <form action="../php/yo.php" method="POST" autocomplete="off">
<!--"action" es un atributo que especifica la dirección URL a la que se enviarán los datos del formulario después de que se envíe En este caso, se ha dejado en blanco para que los datos se envíen a la misma página.
"method" es un atributo que especifica el método de envío de los datos del formulario. En este caso, se utiliza "POST", que es uno de los dos métodos estándar de envío de formularios HTTP, que se utiliza para enviar datos más sensibles y grandes.
"autocomplete" es un atributo que indica si el autocompletado del formulario debe estar habilitado o deshabilitado En este caso, se ha deshabilitado ("off") para evitar que los navegadores almacenen datos de formulario anteriores y evite problemas de seguridad.-->                        

                    <div class="mb-3"> <!-- margen y el tamaño de la margen-->
                    <label for="t_doc" class="form-label"><i class="far fa-address-card"></i> Tipo de Documento</label>
                        <select class="form-select" name="t_doc" id="t_doc">
                            <option value="C.C">Cédula de Ciudadanía</option>
                            <option value="C.E">Cédula de Extranjería</option>
                            <option value="T.I">Tarjeta de Identidad</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="documento" class="form-label"><i class="fas fa-id-card"></i> Número de Documento</label>
                        <input type="text" id="documento" class="form-control" name="documento" inputmode="numeric" max="9999999999" min="1000000000" required>
                    </div>
                    
                    

                    <div class="mb-3">
                        <label for="nombre" class="form-label"><i class="fas fa-user-tag"></i> Primer Nombre</label>
                        <input type="text" id="nombre" class="form-control" name="nombre" MaxLength="45" required >
                    </div>

                    <div class="mb-3">
                        <label for="2nombre" class="form-label"><i class="far fa-user"></i> Segundo Nombre</label>
                        <input type="text" id="2nombre" class="form-control" name="2nombre">
                    </div>

                    <div class="mb-3">
                        <label for="apellido" class="form-label"><i class="fas fa-user-tag"></i> Primer Apellido</label>
                        <input type="text" id="apellido" class="form-control" name="apellido" required>
                    </div>

                    <div class="mb-3">
                        <label for="2apellido" class="form-label"><i class="far fa-user"></i> Segundo Apellido</label>
                        <input type="text" id="2apellido" class="form-control" name="2apellido">
                    </div>

                    

                </div>

                <div class="col-6 bg-white p-5 pb-0">

                    <div class="mb-3">
                        <label for="usuario" class="form-label"><i class="fas fa-user-circle"></i> Nombre De Usuario</label>
                        <input type="text" id="usuario" class="form-control" name="usuario" required>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label"><i class="fas fa-key"></i> Contraseña</label>
                            <input type="password" id="password" class="form-control" name="password" required>
                    </div>

                    <div class="mb-3">
                        <label for="tel" class="form-label"><i class="fas fa-phone-alt"></i> Teléfono</label>
                        <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">+57</span>
                        <input type="tel" id="tel" class="form-control" name="tel" aria-labeL="teléfono" aria-describedby="basic-addon1" placeholder="--- --- ----" required>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="correo" class="form-label"><i class="fas fa-envelope"></i> Correo Electrónico</label>
                        <input type="email" id="correo" class="form-control" name="correo" required>
                    </div>

                    <div class="mb-3">
                        <label for="Pregunta" class=""><i class="fas fa-user"></i> Pregunta seguridad</label>
                        <select class="form-select" name="pregunta" id="pregunta">
                            <option value="1">Ciudad de nacimiento</option>
                            <option value="2">Nombre de tu mascota</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="respuesta" class="form-label"><i class="fas fa-user-tag"></i> respuesta</label>
                        <input type="text" id="respuesta" class="form-control" name="respuesta" required>
                    </div>
                    
                    

                </div>

                

                <div class="col-12 bg-white mb-3 rounded-bottom ps-5 pe-5">

                    <a href="inicio_sesion.php" class="text-decoration-none">
                        <div class="d-grid mb-4">
                        
                            <button type="submit" class="btn btn-primary link"><i class="fas fa-arrow-circle-left"></i> Registrar</button>
                        
                        </div>
                    </a>

                    <a href="inicio_sesion.php" class="text-decoration-none">
                        <div class="d-grid mb-4">
                        
                            <button type="button" class="btn btn-primary link"><i class="fas fa-arrow-circle-left"></i> Volver</button>
                        
                        </div>
                    </a>
                </div>
                </form>
            </div>
        </section>
</body>
</html>
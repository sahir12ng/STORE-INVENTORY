<?php
include '../php/olos.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página inventario">
    <meta name="keywords" content="Inventario, Organizar, Papel">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>Inicio-Store-Inventory</title>
</head>
<body>
  <div class="overlay"></div> <!-- es un elemento HTML que se utiliza para crear una capa de superposición en la página web. Esto significa que se puede colocar contenido encima de otro contenido existente en la página y controlar su visibilidad y comportamiento a través de CSS o JavaScript. Por ejemplo, se podría utilizar una capa de superposición para mostrar una ventana emergente con información adicional cuando el usuario hace clic en un botón.-->
  <section class="container position-absolute top-50 start-50 translate-middle">
            <div class="mt-3 rounded p-5">
              <div class="row">
                <div class="col_1 fondo d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start d-flex">
                  <img src="../img/logotipo-removebg-preview.png" alt="inventario">
                </div>
              
                
                <div class="col bg-white p-5 rounded-end">
                    
                  <div class="row justify-content-between">
                    <div class="col-4">
                      <img src="../img/isotipo.PNG" width="420" alt="logo"><!--es otro atributo HTML que se utiliza para proporcionar una descripción alternativa para una imagen en caso de que ésta no pueda ser mostrada. El valor del atributo -->
                    </div>
                  </div>
                  <h2 class="fw-bold text-center py-5">¡Bienvenido!</h2>

                  
                  <form action="validar.php" method="POST">
                    <div class="mb-3">
                        <label for="xd" class="form-label">Ingrese su tipo de documento</label>
                        <select name="aña" class="form-select">
                            <?php
                            foreach ($con->query('SELECT * from tipo_documento') as $row) {
                                echo '<option value="' . $row['t_doc'] . '">' . $row['desc_tdoc'] . '</option>';
                            }
                            ?>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="user" class="form-label">Número de documento</label>
                        <input type="text" id="user" name="user" class="form-control" placeholder="Ingrese su ID" required>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" id="password" name="pass" class="form-control" placeholder="Ingrese su contraseña" required>
                    </div>

                    <div class="d-grid">
                      <input type="submit" class="btn btn-primary" value="Iniciar Sesión">
                    </div>

                    <a href="registar.php" class="link">
                      <div class="d-grid">
                        <button type="button" class="btn btn-primary registro">Registrarme <i class="fas fa-clipboard-list"></i> </button>
                      </div>
                    </a>
                    <div class="my-3">
                      <span><a href="Recuperar_Contraseña.php">Olvidé mi contraseña</a></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  </section>
</body>
</html>
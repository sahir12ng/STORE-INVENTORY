<?php
    require_once "form_productos.php";
	require_once "conexion.php";
    $db=database::conectar();

    $id = $_GET['id'];

    $sentencia = $db->prepare("SELECT * FROM productos WHERE cod_producto = ?;");
    $sentencia->execute([$id]);
    $producto = $sentencia->fetch(PDO::FETCH_OBJ);

    $sentencia2 = $db->query("SELECT tipo_prod   
    FROM categoria_producto  
    EXCEPT  
    SELECT tipo_prod   
    FROM categoria_producto
    WHERE tipo_prod = '$producto->fk_tipo_prod';");
    $categorias = $sentencia2->fetchAll(PDO::FETCH_OBJ);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página inventario">
    <meta name="keywords" content="Inventario, Organizar, Yeso">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/cddf3df688.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../css/productos.css">
    <title>Inicio-Caltory</title>
</head>
<body>
  <div class="overlay"></div>
  <section class="container">
          <div class="row position-relative">
              
                <div class="col-6 rounded shadow-sm mb-3 p-4 position-absolute top-0 start-50 translate-middle-x mt-5 bg-white">
                  <h2 class="fw-bold text-center">Actualizar Producto</h2>

                  
                  <form method="POST">
                    <div class="mb-2 mt-4">
                      <label for="nom_prod" class="form-label"><i class="fas fa-store"></i> Nombre del producto</label>
                      <input type="text" id="nom_prod" class="form-control" name="nom_prod" placeholder="Ingrese aquí el nombre del producto" value="<?php echo $producto->nom_producto; ?>" required>
                    </div>

                    <div class="mb-2">
                      <label for="precio" class="form-label"><i class="fa-solid fa-badge-dollar"></i> Precio del Producto</label>
                      <input type="number" id="precio" class="form-control" name="precio" placeholder="Ingrese aquí el precio del producto" value="<?php echo $producto->valor_producto; ?>" required>
                    </div>

                    <div class="mb-2">
                      <label for="cant_disp" class="form-label"><i class="fa-solid fa-input-numeric"></i> Cantidad de unidades disponibles</label>
                      <input type="number" id="cant_disp" class="form-control" name="cant_disp" placeholder="Ingrese aquí la cantidad de productos disponibles" value="<?php echo $producto->cant_prod_disp; ?>" required>
                    </div>

                    <div class="mb-3">
                        <label for="categoria" class="form-label"><i class="fa-solid fa-ball-pile"></i> Categoría del producto</label>
                        <select class="form-select" name="categoria" id="categoria">
                            <?php
                            foreach ($categorias as $key => $dato) {
                                ?>
                                    <option selected>
                                    <?php echo $producto->fk_tipo_prod; ?>
                                    </option>
                                    <option>
                                    <?php echo $dato->tipo_prod; ?>
                                    </option>
                                <?php
                            }
                            ?>
                        </select>
                    </div>

                    <div class="mb-3">
                      <label for="fecha_ingreso" class="form-label"><i class="fa-solid fa-calendar"></i> Fecha de ingreso del producto</label>
                      <input type="date" id="fecha_ingreso" class="form-control" name="fecha_ingreso" value="<?php echo $producto->fecha_ingreso_prod; ?>" required>
                    </div>

                    <input type="hidden" name="cod" id="cod" value="<?php echo $producto->cod_producto; ?>">

                    <div class="d-grid">
                      <button type="submit" class="btn btn-secondary mb-2" onclick="this.form.action = '?action=actualizar_producto';">Actualizar Producto <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </div>

                    <a href="inventario_salidas.php" class="link">
                      <div class="d-grid">
                        <button type="button" class="btn btn-danger registro"><i class="fa-regular fa-arrow-left-from-line"></i> Volver</button>
                      </div>
                    </a>
                  </form>
                </div>
              </div>
          </div>
  </section>
</body>
</html>
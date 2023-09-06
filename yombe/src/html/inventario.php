<?php
	include_once "form_productos.php";
	include_once "conexion.php";
	$db=database::conectar();
	$sentencia = $db->query("SELECT * FROM producto;");
	$producto = $sentencia->fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>inventario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
	<link rel="stylesheet" href="../css/inv.css">
</head>
<body>
	<header>
		<div class="collapse" id="navbarToggleExternalContent">
			<div class="bg-dark p-4">
				<a class="text-decoration" href="#"><h4>Inicio</h4></a>
				<a class="text-decoration" href="#"><h4>Inventario de Entradas</h4></a>
				<a class="text-decoration" href="#"><h4>Control de Usuarios</h4></a>
				<a class="text-decoration" href="#"><h4>Configuración</h4></a>
			</div>
		</div>
	<nav class="navbar navbar-dark fondo">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<img class="logo2" src="../img/isotipo.PNG" alt="Logo" >
			<a href="interfaz.php"><img class="logo" src="../img/logotipo.PNG" alt="Logo"></a>
		</div>
	</nav>
	</header>
	<div class="container mt-5">
		
	<div class="row">
			<div class="col-sm-12">
						<div class="row">
						<form action="">
									Filtrar por:
								
									<label class="form-label" for="codigo">Código</label>
									<input class="col-1 rounded" name="codigo" id="codigo" type="number">
							
									<label class="form-label" for="nombre">Nombre</label>
									<input class="col-1 rounded" type="text" id="nombre" name="nombre">

									<label class="form-label" for="precio">Precio</label>
									<input class="col-1 rounded" type="number" name="precio" id="precio">

									<label class="form-label" for="categoria">Categoría</label>
									<input class="col-1 rounded" type="text" id="categoria" name="categoria">

									<label class="form-label" for="fecha">Fecha de Ingreso</label>
									<input class="col-2 rounded" type="date" id="fecha" name="fecha">

									<input type="submit" class="btn btn-primary ms-2 col-1" value="Buscar">
								</form>
						</div>

						<div class="row p-5 pb-0 pt-3">
								<a class="btn btn-primary" href="prod_nuevo.php">
									<i class="fas fa-plus-circle"></i> Nuevo Producto
								</a>
							</div>
						<hr>
						<div class="row">
							<div class="col-12 rounded">
									<table class="table table-dark table-hover">
									<thead>
										<tr class="font-weight-bold">
											<td>Código</td>
											<td>Nombre</td>
											<td>Precio</td>
											<td>Cantidad Disponible</td>
											<td>Proveedor</td>
											<td>Editar</td>
											<td>Eliminar</td>
										</tr>
									</thead>
									<?php
									
									foreach ($producto as $key => $dato) {
										?>
											<tbody>
										<tr>
											<td><?php echo $dato->Id_producto; ?></td>
											<td><?php echo $dato->nom_producto; ?></td>
											<td><?php echo $dato->valor_producto; ?></td>
											<td><?php echo $dato->disponibilidad_producto; ?></td>
											<td><?php echo $dato->proveedor_Id_proveedor; ?></td>
											<td>
												<a href="#?id=<?php echo $dato->Id_producto; ?>" class="btn btn-warning btn-sm">
													<i class="fas fa-edit"></i>
												</a>
												
											</td>
											<td>
												<a href="?action=eliminar_prod&cod=<?php echo $dato->Id_producto ?>" class="btn btn-danger" onclick="return confirmar_eliminar()">
													<li class="fas fa-trash-alt"></li>
												</a>
											</td>
										</tr>
									</tbody>
										<?php
									}
									
									?>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</body>
</html>
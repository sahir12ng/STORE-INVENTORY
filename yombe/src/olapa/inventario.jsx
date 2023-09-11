<>
<body/>
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
			<img class="logo2" src="../img/isotipo.PNG" alt="Logo"/>
			<a href="interfaz.php"><img class="logo" src="../img/logotipo.PNG" alt="Logo"/></a>
		</div>
	</nav>
	</header>
	<div class="container mt-5"/>
		
	<div class="row"/>
			<div class="col-sm-12"/>
						<div className="row"/>
						<form/>
									Filtrar por:
								
									<label className="form-label" for="codigo">Código</label>
									<input className="col-1 rounded" name="codigo" id="codigo" type="number">
							
									<label className="form-label" for="nombre">Nombre</label>
									<input className="col-1 rounded" type="text" id="nombre" name="nombre">

									<label className="form-label" for="precio">Precio</label>
									<input className="col-1 rounded" type="number" name="precio" id="precio">

									<label className="form-label" for="categoria">Categoría</label>
									<input className="col-1 rounded" type="text" id="categoria" name="categoria">

									<label className="form-label" for="fecha">Fecha de Ingreso</label>
									<input className="col-2 rounded" type="date" id="fecha" name="fecha">

									<input type="submit" className="btn btn-primary ms-2 col-1" value="Buscar">
								

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
									
								</table>
							</div>
						</div>
					</div/>
				</div>
			</div>
		</div>
	
	
	
</body>
</>
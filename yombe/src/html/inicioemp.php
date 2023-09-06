<?php
include 'ispol.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form action="validar2.php" method="POST">
                    <div class="mb-3">
                        <label for="xd" class="form-label">Ingrese su tipo de documento</label>
                        <select name="aña" class="form-select">
                            <?php
                            foreach ($con->query('SELECT * from tipo_documento') as $row) {
                                echo '<option value="' . $row['cod_tdoc'] . '">' . $row['desc_tdoc'] . '</option>';
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

                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                </form>

                <div class="mt-3">
                    <a href="contras.php" class="btn btn-link"><button>Olvidé mi contraseña</button></a>
                    <a href="../../inicio.php" class="btn btn-link"><button>Volver</button></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS (Optional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

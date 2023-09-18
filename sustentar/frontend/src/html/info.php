<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="../css/info.css">
  <title>Información Empleado</title>

</head>
<body>
  <h1>INFORMACIÓN EMPLEADO</h1>

  
  
  <form>
    <img src="../img/empleee-removebg-preview.png" alt="Imagen" class="imagen-formulario">


    <label for="nombre">Tipo de Documento:</label>
    <select name="doc" id="doc">
        <option value=""></option>
         <option value="C_C">Cedula de Ciudadania</option>
         <option value="C_E">Cedula de Extranjeria</option>
         <option value="T_I">Tarjeta de Identidad</option>
      </select>

    <label for="nombre">Numero Documento:</label>
    <input type="text" id="numerod" name="numerod" required>
    
    <label for="nombre">Nombres:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="nombre">Apellidos:</label>
    <input type="text" id="apellido" name="apellido" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="nombre">EPS:</label>
    <input type="text" id="eps" name="epsS" required>

    <label for="fecha-nacimiento">Fecha de Nacimiento:</label>
    <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required>

     <br> <br>
    <input type="submit" value="Enviar">
     <br> <br>
     
    <input type="submit" value="Regresar">
  </form>

</body>
</html>

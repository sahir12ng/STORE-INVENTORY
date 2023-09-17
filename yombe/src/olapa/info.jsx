import React from 'react';
// poner css

function InformacionEmpleado() {
  return (
    <div>
      <h1>INFORMACIÓN EMPLEADO</h1>

      <form>
        <img
          src="../img/empleee-removebg-preview.png"
          alt="Imagen"
          className="imagen-formulario"
        />

        <label htmlFor="doc">Tipo de Documento:</label>
        <select name="doc" id="doc">
          <option value=""></option>
          <option value="C_C">Cedula de Ciudadania</option>
          <option value="C_E">Cedula de Extranjeria</option>
          <option value="T_I">Tarjeta de Identidad</option>
        </select>

        <label htmlFor="numerod">Numero Documento:</label>
        <input type="text" id="numerod" name="numerod" required />

        <label htmlFor="nombre">Nombres:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="apellido">Apellidos:</label>
        <input type="text" id="apellido" name="apellido" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="eps">EPS:</label>
        <input type="text" id="eps" name="epsS" required />

        <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fecha-nacimiento"
          name="fecha-nacimiento"
          required
        />

        <br /> <br />
        <input type="submit" value="Enviar" />
        <br /> <br />

        <input type="submit" value="Regresar" />
      </form>
    </div>
  );
}

export default InformacionEmpleado;

import React, { useState } from 'react';
import { FuncionRegistrarProv } from '../../js/scritp_prov';

function ProveedorForm() {
  const [proveedor, setProveedor] = useState({
    Id_proveedor: '',
    nombre_proveedor: '',
    direccion_proveedor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProveedor((prevProveedor) => ({
      ...prevProveedor,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await FuncionRegistrarProv(proveedor);

      if (result.success) {
        // Proveedor registrado exitosamente
        alert(result.message);

        // Puedes hacer alguna acción adicional, como redirigir o limpiar el formulario
      } else {
        // Error al registrar proveedor
        alert(result.message);

        // Puedes imprimir detalles adicionales del error
        console.error('Detalles del error:', result.data);
      }
    } catch (error) {
      console.error('Error al registrar proveedor:', error.message);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4 text-center">Registrar Proveedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Id_proveedor" className="form-label">
              ID Proveedor:
              <input
                type="text"
                id="Id_proveedor"
                name="Id_proveedor"
                value={proveedor.Id_proveedor}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="nombre_proveedor" className="form-label">
              Nombre Proveedor:
              <input
                type="text"
                id="nombre_proveedor"
                name="nombre_proveedor"
                value={proveedor.nombre_proveedor}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="direccion_proveedor" className="form-label">
              Dirección Proveedor:
              <input
                type="text"
                id="direccion_proveedor"
                name="direccion_proveedor"
                value={proveedor.direccion_proveedor}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Registrar Proveedor</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProveedorForm;

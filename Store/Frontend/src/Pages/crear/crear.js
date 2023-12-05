import React, { useState } from 'react';
import { FuncionRegistrarProv } from '../../js/scritp_prov';
import './formpov.css'; 
import { Link } from 'react-router-dom';
import AppHeader from '../../Components/AppHeader';
import AppFooter from '../../Components/AppFooter';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function ProveedorForm() {
  const [proveedor, setProveedor] = useState({
    Id_proveedor: '',
    nombre_proveedor: '',
    direccion_proveedor: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setProveedor((prevProveedor) => ({
      ...prevProveedor, //Utiliza el operador de propagación para copiar todas las propiedades del estado anterior. Esto es importante para no perder las propiedades existentes del estado.
      [name]: value,
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await FuncionRegistrarProv(proveedor);

    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
      console.error('Detalles del error:', result.data);
    }
  } catch (error) {
    console.error('Error al registrar proveedor:', error.message);
  }
};

return (
  <div className="App">
    <AppHeader></AppHeader>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent><div className="container-fluid d-flex align-items-center justify-content-center vh-8">
      <div className="card p-4 custom-card">
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
        <Link to="/proveedores" className="btn btn-azul-oscuro-claro">
        regresar
      </Link>
      </div>
    </div>
      </div>
      <AppFooter />
    </div>
    
  );
}

export default ProveedorForm;

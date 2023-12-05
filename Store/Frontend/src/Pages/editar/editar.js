import React, { useState, useEffect } from 'react';
import { FuncionEditarProv, FuncionBuscarProvPorId } from '../../js/scritp_prov';
import { useParams } from 'react-router-dom';
import AppHeader from '../../Components/AppHeader';
import AppFooter from '../../Components/AppFooter';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function EditarProveedorForm() {
  const { id } = useParams();
  const [proveedor, setProveedor] = useState({
    Id_proveedor: '',
    nombre_proveedor: '',
    direccion_proveedor: '',
});

useEffect(() => {
  const cargarDatosProveedor = async () => {
    try {
      const datosProveedor = await FuncionBuscarProvPorId(id);
      if (datosProveedor && datosProveedor.Id_proveedor) {
        setProveedor(datosProveedor);
      }
    } catch (error) {
      console.error('Error al cargar datos del proveedor:', error.message);
    }
  };

  cargarDatosProveedor();
}, [id]);

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
    await FuncionEditarProv(id, proveedor);
    alert('Proveedor editado exitosamente');
  } catch (error) {
    console.error('Error al editar proveedor:', error.message);
  }
};

return (
  <div className="App">
      <AppHeader></AppHeader>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent><div className="container d-flex align-items-center justify-content-center vh95">
      <div className="card p-4">
        <h2 className="mb-4 text-center">Editar Proveedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Id_proveedor" className="form-label">
              ID Proveedor:
              <input
                type="text"
                name="Id_proveedor"
                value={proveedor.Id_proveedor || ''}
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
                name="nombre_proveedor"
                value={proveedor.nombre_proveedor || ''}
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
                name="direccion_proveedor"
                value={proveedor.direccion_proveedor || ''}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
      </div>
      <AppFooter />
    </div>
  
  );
}

export default EditarProveedorForm;

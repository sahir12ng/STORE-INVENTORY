import "./estilo.css"
import React, { useState, useEffect } from 'react';
import { FuncionBuscarProv, FuncionEliminarProv,  } from '../../js/scritp_prov';
import { Link } from 'react-router-dom';
import PageContent from "../../Components/PageContent";
import AppFooter from "../../Components/AppFooter";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";


function Tablaproveedores() {
  const [proveedores, setProveedores] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await FuncionBuscarProv();
      setProveedores(data);
    } catch (error) {
      console.error('Error al obtener datos de proveedores:', error);
    }
};

  fetchData();
}, []);

const handleDelete = async (provId) => {
  try {
    await FuncionEliminarProv(provId); 
    setProveedores((prevProveedores) => prevProveedores.filter((proveedor) => proveedor._id !== provId));
  } catch (error) {
    console.error('Error al eliminar proveedor:', error.message);
  }
};
  
return (
  <>
    <div className="App">
    <AppHeader></AppHeader>
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent/><div className="container mt-5">
      <h1 className="mb-4">Información de Proveedores</h1>
      
      <Link to="/crearProveedor" className="btn btn-azul-oscuro-claro mb-3">
        Crear Nuevo Proveedor
      </Link>

      <table className="table table-bordered">
        <thead className="custom-table-header">
          <tr>
            <th>ID</th>
            <th>Nombre Proveedor</th>
            <th>Dirección Proveedor</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor._id}>
              <td>{proveedor.Id_proveedor}</td>
              <td>{proveedor.nombre_proveedor}</td>
              <td>{proveedor.direccion_proveedor}</td>
              <td>
                <Link to={`/updateProv/${proveedor._id}`} className="btn btn-success">
                  Editar
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(proveedor._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    <AppFooter />
  </div>
    </>
  );
}

export default Tablaproveedores;

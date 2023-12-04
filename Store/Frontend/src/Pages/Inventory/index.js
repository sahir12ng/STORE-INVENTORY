import React, { useState, useEffect } from 'react';
import { FuncionBuscarProd, FuncionEliminarProd } from '../../js/scritp_prod'; // Asegúrate de tener las funciones correctas
import { Link } from 'react-router-dom';

function TablaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FuncionBuscarProd();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener datos de productos:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (prodId) => {
    try {
      await FuncionEliminarProd(prodId);
      setProductos((prevProductos) => prevProductos.filter((producto) => producto._id !== prodId));
    } catch (error) {
      console.error('Error al eliminar producto:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Información de Productos</h1>
      
      <Link to="/crearProducto" className="btn btn-primary mb-3">
        Crear Nuevo Producto
      </Link>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre Producto</th>
            <th>Valor Producto</th>
            <th>Disponibilidad Producto</th>
            <th>Proveedor ID</th>
            <th>Categoría ID</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>{producto.Id_producto}</td>
              <td>{producto.nom_producto}</td>
              <td>{producto.valor_producto}</td>
              <td>{producto.disponibilidad_producto}</td>
              <td>{producto.proveedor_Id_proveedor}</td>
              <td>{producto.Categoria}</td>
              <td>
                <Link to={`/updateProd/${producto._id}`} className="btn btn-success">
                  Editar
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(producto._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;

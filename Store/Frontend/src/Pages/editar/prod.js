import React, { useState, useEffect } from 'react';
import { FuncionEditarProd, FuncionBuscarProdPorId, FuncionBuscarProv, FuncionBuscarCategorias } from '../../js/scritp_prod';
import { useParams } from 'react-router-dom';

function EditarProductoForm() {
  const { id } = useParams();
  const [producto, setProducto] = useState({
    Id_producto: '',
    nom_producto: '',
    valor_producto: '',
    disponibilidad_producto: '',
    proveedor_Id_proveedor: '', 
    Categoria: '', 
  });

  const [proveedores, setProveedores] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarDatosProducto = async () => {
      try {
        const datosProducto = await FuncionBuscarProdPorId(id);

        if (datosProducto && datosProducto.Id_producto) {
          setProducto(datosProducto);
        }
      } catch (error) {
        console.error('Error al cargar datos del producto:', error.message);
      }
    };

    const cargarProveedores = async () => {
      try {
        const proveedoresData = await FuncionBuscarProv();
        setProveedores(proveedoresData);
      } catch (error) {
        console.error('Error al cargar proveedores:', error);
      }
    };

    const cargarCategorias = async () => {
      try {
        const categoriasData = await FuncionBuscarCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    };

    cargarDatosProducto();
    cargarProveedores();
    cargarCategorias();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await FuncionEditarProd(id, producto);
      alert('Producto editado exitosamente');
      // No necesitas cargar nuevamente los datos del producto después de la edición
    } catch (error) {
      console.error('Error al editar producto:', error.message);
    }
  };
  

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <form onSubmit={handleSubmit} className="card p-4">
        <h2 className="mb-4 text-center">Editar Producto</h2>

        <label>
          ID Producto:
          <input
            type="text"
            name="Id_producto"
            value={producto.Id_producto || ''}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />

        <label>
          Nombre Producto:
          <input
            type="text"
            name="nom_producto"
            value={producto.nom_producto || ''}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />

        <label>
          Valor Producto:
          <input
            type="text"
            name="valor_producto"
            value={producto.valor_producto || ''}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />

        <label>
          Disponibilidad Producto:
          <input
            type="text"
            name="disponibilidad_producto"
            value={producto.disponibilidad_producto || ''}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />

        <label>
          Proveedor:
          <select name="proveedor_Id_proveedor" value={producto.proveedor_Id_proveedor} onChange={handleChange} className="form-control">
            <option value="">Seleccionar Proveedor</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor._id} value={proveedor._id}>
                {proveedor.nombre_proveedor}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Categoría:
          <select name="Categoria" value={producto.Categoria} onChange={handleChange} className="form-control">
            <option value="">Seleccionar Categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria._id} value={categoria._id}>
                {categoria.desc_categoria}
              </option>
            ))}
          </select>
        </label>
        <br />

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        </div>
      </form>
    </div>
  );
}

export default EditarProductoForm;

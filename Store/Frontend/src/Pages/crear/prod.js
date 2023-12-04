import React, { useState, useEffect } from 'react';
import { FuncionRegistrarProd, FuncionBuscarProdPorId, FuncionBuscarProv, FuncionBuscarCategorias } from '../../js/scritp_prod';

const FormularioProducto = ({ productoId }) => {
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
    cargarProveedores();
    cargarCategorias();

    if (productoId) {
      cargarDatosProducto(productoId);
    }
  }, [productoId]);

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

  const cargarDatosProducto = async (prodId) => {
    try {
      const productoExistente = await FuncionBuscarProdPorId(prodId);
      setProducto(productoExistente);
    } catch (error) {
      console.error('Error al cargar datos del producto:', error);
    }
  };

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
      const result = await FuncionRegistrarProd(producto);

      if (result.success) {
        // Producto registrado exitosamente
        alert(result.message);

        // Puedes hacer alguna acción adicional, como redirigir o limpiar el formulario
      } else {
        // Error al registrar producto
        alert(result.message);

        // Puedes imprimir detalles adicionales del error
        console.error('Detalles del error:', result.data);
      }
    } catch (error) {
      console.error('Error al registrar producto:', error.message);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <form onSubmit={handleSubmit} className="card p-4">
        <h2 className="mb-4 text-center">{productoId ? 'Editar Producto' : 'Registrar Producto'}</h2>

        <div className="mb-3">
          <label htmlFor="Id_producto" className="form-label">
            ID Producto:
            <input type="text" name="Id_producto" value={producto.Id_producto} onChange={handleChange} className="form-control" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="nom_producto" className="form-label">
            Nombre Producto:
            <input type="text" name="nom_producto" value={producto.nom_producto} onChange={handleChange} className="form-control" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="valor_producto" className="form-label">
            Valor Producto:
            <input type="text" name="valor_producto" value={producto.valor_producto} onChange={handleChange} className="form-control" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="disponibilidad_producto" className="form-label">
            Disponibilidad Producto:
            <input type="text" name="disponibilidad_producto" value={producto.disponibilidad_producto} onChange={handleChange} className="form-control" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="proveedor_Id_proveedor" className="form-label">
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
        </div>

        <div className="mb-3">
          <label htmlFor="Categoria" className="form-label">
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
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">{productoId ? 'Editar Producto' : 'Registrar Producto'}</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioProducto;

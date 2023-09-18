import React, { useState } from 'react';


function App() {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');

  // You should fetch the product data from an API or a data source in a useEffect hook.

  const productos = [
    // Replace this with your fetched data or initialize it with an empty array.
  ];

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Implement your filtering logic here
    // You can filter the 'productos' array based on the filter values (codigo, nombre, precio, etc.)
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <form onSubmit={handleFilterSubmit}>
              Filtrar por:
              <label className="form-label" htmlFor="codigo">
                Código
              </label>
              <input
                className="col-1 rounded"
                name="codigo"
                id="codigo"
                type="number"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />

              <label className="form-label" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="col-1 rounded"
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <label className="form-label" htmlFor="precio">
                Precio
              </label>
              <input
                className="col-1 rounded"
                type="number"
                name="precio"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />

              <label className="form-label" htmlFor="categoria">
                Categoría
              </label>
              <input
                className="col-1 rounded"
                type="text"
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />

              <label className="form-label" htmlFor="fecha">
                Fecha de Ingreso
              </label>
              <input
                className="col-2 rounded"
                type="date"
                id="fecha"
                name="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />

              <input
                type="submit"
                className="btn btn-primary ms-2 col-1"
                value="Buscar"
              />
            </form>
          </div>

          <div className="row p-5 pb-0 pt-3">
            <a className="btn btn-primary" href="prod_nuevo.php">
              <i className="fas fa-plus-circle"></i> Nuevo Producto
            </a>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 rounded">
              <table className="table table-dark table-hover">
                <thead>
                  <tr className="font-weight-bold">
                    <td>Código</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Cantidad Disponible</td>
                    <td>Proveedor</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((dato, index) => (
                    <tr key={index}>
                      <td>{dato.Id_producto}</td>
                      <td>{dato.nom_producto}</td>
                      <td>{dato.valor_producto}</td>
                      <td>{dato.disponibilidad_producto}</td>
                      <td>{dato.proveedor_Id_proveedor}</td>
                      <td>
                        <a href={`#?id=${dato.Id_producto}`} className="btn btn-warning btn-sm">
                          <i className="fas fa-edit"></i>
                        </a>
                      </td>
                      <td>
                        <a
                          href={`?action=eliminar_prod&cod=${dato.Id_producto}`}
                          className="btn btn-danger"
                          onClick={() => confirmar_eliminar()}
                        >
                          <li className="fas fa-trash-alt"></li>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

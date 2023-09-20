import React, { useState } from 'react';
import { FuncionRegistrar } from '../js/olapa';
import { Link } from 'react-router-dom';

function Inicio() {
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [password, setPassword] = useState('');

  const luicarry = {
    tipoDocumento: tipoDocumento,
    nombre: numeroDocumento,
    contra: password
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const yo = await FuncionRegistrar(luicarry);

    console.log(yo);
  };

  return (
    <div>
      <header>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Página inventario" />
        <meta name="keywords" content="Inventario, Organizar, Papel" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="../css/style.css" />
        <title>Inicio-Store-Inventory</title>
      </header>
      <div>
        <div className="overlay"></div>
        <section className="container position-absolute top-50 start-50 translate-middle">
          <div className="mt-3 rounded p-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="xd" className="form-label">
                  Ingrese su tipo de documento
                </label>
                <select
                  name="tipoDocumento"
                  className="form-select"
                  value={tipoDocumento}
                  onChange={(e) => setTipoDocumento(e.target.value)}
                >
                  {[
                    { t_doc: 'C.C', desc_tdoc: 'Cédula de Ciudadanía' },
                    { t_doc: 'C.E', desc_tdoc: 'Cédula de Extranjería' },
                    { t_doc: 'T.I', desc_tdoc: 'Tarjeta de Identidad' },
                  ].map((row) => (
                    <option key={row.t_doc} value={row.t_doc}>
                      {row.desc_tdoc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="user" className="form-label">
                  Número de documento
                </label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  className="form-control"
                  placeholder="Ingrese su ID"
                  value={numeroDocumento}
                  onChange={(e) => setNumeroDocumento(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="pass"
                  className="form-control"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Iniciar Sesión"
                />
              </div>
              <Link to="/Registrar" className="link">
                <div className="d-grid">
                  <button type="button" className="btn btn-primary registro">
                    Registrarme <i className="fas fa-clipboard-list"></i>
                  </button>
                </div>
              </Link>
              <div className="my-3">
                <span>
                  <a href="Recuperar_Contraseña.php">Olvidé mi contraseña</a>
                </span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inicio;

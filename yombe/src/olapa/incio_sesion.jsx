import React from 'react';


function Inicio() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta
          http-equiv="X-UA-Compatible"
          content="IE=edge"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Página inventario"
        />
        <meta
          name="keywords"
          content="Inventario, Organizar, Papel"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../css/style.css" />
        <title>Inicio-Store-Inventory</title>
      </head>
      <body>
        <div className="overlay"></div>
        <section className="container position-absolute top-50 start-50 translate-middle">
          <div className="mt-3 rounded p-5">
            <div className="row">
              <div className="col-1 fondo d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start d-flex">
                <img
                  src="https://github.com/sahir12ng/STORE-INVENTORY/blob/main/frontend/img/logotipo-removebg-preview.png?raw=true"
                  alt="inventario"
                />
              </div>

              <div className="col bg-white p-5 rounded-end">
                <div className="row justify-content-between">
                  <div className="col-4">
                    <img
                      src="https://github.com/sahir12ng/STORE-INVENTORY/blob/main/frontend/img/isotipo.PNG?raw=true"
                      width="420"
                      alt="logo"
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-center py-5">
                  ¡Bienvenido!
                </h2>

                <form action="validar.php" method="POST">
                  <div className="mb-3">
                    <label htmlFor="xd" className="form-label">
                      Ingrese su tipo de documento
                    </label>
                    <select name="aña" className="form-select">
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

                  <a href="registar.php" className="link">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-primary registro"
                      >
                        Registrarme <i className="fas fa-clipboard-list"></i>
                      </button>
                    </div>
                  </a>
                  <div className="my-3">
                    <span>
                      <a href="Recuperar_Contraseña.php">
                        Olvidé mi contraseña
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}

export default Inicio;

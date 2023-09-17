import React from 'react';
import './style_registro.css'; // Import your CSS file here

function Registro() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

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
          content="Inventario, Organizar, Papeleria"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="../css/style_registro.css"
        />

        <title>Registro-Store-Inventory</title>
      </head>
      <body>
        <section className="container">
          <div className="mt-3 p-4">
            <div className="row">
              <div className="col-12 bg-white rounded-top">
                <h2 className="fw-bold text-center py-1 mt-4">
                  ¿Eres nuevo?<br />Regístrate{' '}
                  <i className="fas fa-grin-wink"></i>
                </h2>
              </div>

              <div className="col-6 bg-white p-5 pb-0">
                <form
                  action="../php/yo.php"
                  method="POST"
                  autoComplete="off"
                >
                  <div className="mb-3">
                    <label
                      htmlFor="t_doc"
                      className="form-label"
                    >
                      <i className="far fa-address-card"></i>{' '}
                      Tipo de Documento
                    </label>
                    <select
                      className="form-select"
                      name="t_doc"
                      id="t_doc"
                    >
                      <option value="C.C">
                        Cédula de Ciudadanía
                      </option>
                      <option value="C.E">
                        Cédula de Extranjería
                      </option>
                      <option value="T.I">
                        Tarjeta de Identidad
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="documento"
                      className="form-label"
                    >
                      <i className="fas fa-id-card"></i>{' '}
                      Número de Documento
                    </label>
                    <input
                      type="text"
                      id="documento"
                      className="form-control"
                      name="documento"
                      inputMode="numeric"
                      max="9999999999"
                      min="1000000000"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="nombre"
                      className="form-label"
                    >
                      <i className="fas fa-user-tag"></i>{' '}
                      Primer Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="form-control"
                      name="nombre"
                      maxLength="45"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="2nombre"
                      className="form-label"
                    >
                      <i className="far fa-user"></i>{' '}
                      Segundo Nombre
                    </label>
                    <input
                      type="text"
                      id="2nombre"
                      className="form-control"
                      name="2nombre"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="apellido"
                      className="form-label"
                    >
                      <i className="fas fa-user-tag"></i>{' '}
                      Primer Apellido
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      className="form-control"
                      name="apellido"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="2apellido"
                      className="form-label"
                    >
                      <i className="far fa-user"></i>{' '}
                      Segundo Apellido
                    </label>
                    <input
                      type="text"
                      id="2apellido"
                      className="form-control"
                      name="2apellido"
                    />
                  </div>
                </form>
              </div>

              <div className="col-6 bg-white p-5 pb-0">
                <div className="mb-3">
                  <label
                    htmlFor="usuario"
                    className="form-label"
                  >
                    <i className="fas fa-user-circle"></i>{' '}
                    Nombre De Usuario
                  </label>
                  <input
                    type="text"
                    id="usuario"
                    className="form-control"
                    name="usuario"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    <i className="fas fa-key"></i>{' '}
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="tel"
                    className="form-label"
                  >
                    <i className="fas fa-phone-alt"></i>{' '}
                    Teléfono
                  </label>
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      id="basic-addon1"
                    >
                      +57
                    </span>
                    <input
                      type="tel"
                      id="tel"
                      className="form-control"
                      name="tel"
                      aria-label="teléfono"
                      aria-describedby="basic-addon1"
                      placeholder="--- --- ----"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="correo"
                    className="form-label"
                  >
                    <i className="fas fa-envelope"></i>{' '}
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    className="form-control"
                    name="correo"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="Pregunta"
                    className=""
                  >
                    <i className="fas fa-user"></i>{' '}
                    Pregunta seguridad
                  </label>
                  <select
                    className="form-select"
                    name="pregunta"
                    id="pregunta"
                  >
                    <option value="1">
                      Ciudad de nacimiento
                    </option>
                    <option value="2">
                      Nombre de tu mascota
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="respuesta" className="form-label">
                    <i className="fas fa-user-tag"></i> respuesta
                  </label>
                  <input
                    type="text"
                    id="respuesta"
                    className="form-control"
                    name="respuesta"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12 bg-white mb-3 rounded-bottom ps-5 pe-5">
              <a href="inicio_sesion.php" className="text-decoration-none">
                <div className="d-grid mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary link"
                  >
                    <i className="fas fa-arrow-circle-left"></i>{' '}
                    Registrar
                  </button>
                </div>
              </a>

              <a href="inicio_sesion.php" className="text-decoration-none">
                <div className="d-grid mb-4">
                  <button
                    type="button"
                    className="btn btn-primary link"
                  >
                    <i className="fas fa-arrow-circle-left"></i>{' '}
                    Volver
                  </button>
                </div>
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}

export default Registro;

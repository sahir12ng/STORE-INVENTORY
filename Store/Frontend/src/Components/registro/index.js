import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FuncionRegistrarUsuario, FuncionObtenerTipoDoc,FuncionObtenerPreguntasSeguridad } from '../../js/scritp_user';

function Registro() {
  const [formulario, setFormulario] = useState({
    t_doc_usuario: '',
    id_usuario: '',
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    usuario: '',
    contraseña: '',
    telefono: '',
    correo_usuario: '',
    Id_pregunta_seg: '1',
    ver_p_seg: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
  }));
};

const [listaPreguntasSeguridad, setListaPreguntasSeguridad] = useState([]);

    useEffect(() => {
        const cargarPreguntasSeguridad = async () => {
            try {
                const preguntas = await FuncionObtenerPreguntasSeguridad();
                console.log("Respuesta completa del servidor (preguntas):", preguntas);

                if (preguntas && preguntas.length > 0) {
                    setListaPreguntasSeguridad(preguntas);
                } else {
                    console.warn("La lista de preguntas está vacía o es nula.");
                }
            } catch (error) {
                console.error("Error al cargar la lista de preguntas:", error);
            }
        };

        cargarPreguntasSeguridad();
    }, []);

const [listaTipoDocumento, setListaTipoDocumento] = useState([]);

useEffect(() => {
  const cargarListaTipoDocumento = async () => {
    const lista = await FuncionObtenerTipoDoc();
    setListaTipoDocumento(lista);
};

  cargarListaTipoDocumento();
}, []);


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await FuncionRegistrarUsuario(formulario);

  if (response && response.success) {
    alert('Usuario registrado exitosamente');
  } else {
    alert(`Error al registrar usuario: ${response && response.message}`);
    console.error('Detalles del error:', response && response.error && response.error.message);
  }
} catch (error) {
    console.error('Error en la solicitud:', error.message);
}};

return (
  <div>
    <section className="container">
      <div className="mt-3 p-4">
        <div className="row">
          <div className="col-12 bg-white rounded-top">
            <h2 className="fw-bold text-center py-1 mt-4">
              ¿Eres nuevo?<br />Regístrate{' '}
              <i className="fas fa-grin-wink"></i>
            </h2>
          </div>

         <div className="col-12">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="row">
              <div className="col-md-6 bg-white p-5 pb-0">
                <div className="mb-3">
                <div className="mb-3">
                  <label htmlFor="t_doc_usuario" className="form-label">
                    <i className="far fa-address-card"></i> Tipo de Documento
                  </label>
                  <select
                    className="form-select"
                    name="t_doc_usuario"
                    id="t_doc_usuario"
                    value={formulario.t_doc_usuario}
                    onChange={handleChange}
                    >
                      <option value="">Seleccionar tipo de documento</option>
                      {listaTipoDocumento && listaTipoDocumento.length > 0 ? (
                          listaTipoDocumento.map((tipoDoc) => (
                          <option key={tipoDoc._id} value={tipoDoc._id}>
                          {tipoDoc.desc_tdoc}
                          </option>
                           ))
                          ) : (
                          <option value="" disabled>
                          Sin tipos de documento disponibles
                        </option>
                      )}
                    </select>
                            </div>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="documento" className="form-label">
                                <i className="fas fa-id-card"></i> Número de Documento
                                </label>
                                <input
                                 type="text"
                                id="id_usuario"
                                className="form-control"
                                name="id_usuario"
                                required
                                value={formulario.id_usuario}
                                onChange={handleChange}
                                />
                              </div>
                              <div className="mb-3">
                              <label htmlFor="nombre" className="form-label">
                                <i className="fas fa-user-tag"></i> Primer Nombre
                              </label>
                                <input
                                 type="text"
                                   id="nombre1"
                                  className="form-control"
                                  name="nombre1"
                                  maxLength="45"
                                  required
                                  value={formulario.nombre1}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="nombre2" className="form-label">
                                  <i className="far fa-user"></i> Segundo Nombre
                                </label>
                                <input
                                  type="text"
                                  id="nombre2"
                                  className="form-control"
                                  name="nombre2"
                                  value={formulario.nombre2}
                                  onChange={handleChange}
                                />
                              </div>
                                <div className="mb-3">
                                <label htmlFor="apellido" className="form-label">
                                  <i className="fas fa-user-tag"></i> Primer Apellido
                                </label>
                                <input
                                  type="text"
                                  id="apellido1"
                                  className="form-control"
                                  name="apellido1"
                                  required
                                  value={formulario.apellido1}
                                  onChange={handleChange}
                                   />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="apellido2" className="form-label">
                                  <i className="far fa-user"></i> Segundo Apellido
                                </label>
                                <input
                                   type="text"
                                  id="apellido2"
                                  className="form-control"
                                  name="apellido2"
                                  value={formulario.apellido2}
                                  onChange={handleChange}
                                />
                               </div>
                              </div>
                  <div className="col-md-6 bg-white p-5 pb-0">
                    <div className="mb-3">
                      <label htmlFor="usuario" className="form-label">
                        <i className="fas fa-user-circle"></i> Nombre De Usuario
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        name="username"
                        required
                        value={formulario.username}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        <i className="fas fa-key"></i> Contraseña
                      </label>
                      <input
                        type="password"
                        id="contraseña"
                        className="form-control"
                        name="contraseña"
                        required
                        value={formulario.contraseña}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="tel" className="form-label">
                        <i className="fas fa-phone-alt"></i> Teléfono
                      </label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          +57
                        </span>
                        <input
                          type="tel"
                          id="telefono"
                          className="form-control"
                          name="telefono"
                          aria-label="teléfono"
                          aria-describedby="basic-addon1"
                          placeholder="--- --- ----"
                          required
                          value={formulario.telefono}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="correo" className="form-label">
                        <i className="fas fa-envelope"></i> Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="correo_usuario"
                        className="form-control"
                        name="correo_usuario"
                        required
                        value={formulario.correo_usuario}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Id_pregunta_seg" className="form-label">
                        <i className="fas fa-user"></i> Pregunta de seguridad
                      </label>
                      <select
                        className="form-select"
                        name="Id_pregunta_seg"
                        id="Id_pregunta_seg"
                        value={formulario.Id_pregunta_seg}
                        onChange={handleChange}
                        >
                      <option value="">Seleccionar pregunta de seguridad</option>
                      {listaPreguntasSeguridad && listaPreguntasSeguridad.length > 0 ? (
                        listaPreguntasSeguridad.map((pregunta) => (
                        <option key={pregunta._id} value={pregunta._id}>
                          {pregunta.p_seg}
                        </option>
                          ))
                          ) : (
                        <option value="" disabled>
                          Sin preguntas de seguridad disponibles
                        </option>
                        )}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="respuesta" className="form-label">
                        <i className="fas fa-user-tag"></i> Respuesta
                      </label>
                      <input
                        type="text"
                        id="ver_p_seg"
                        className="form-control"
                        name="ver_p_seg"
                        required
                        value={formulario.ver_p_seg}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-white mb-3 rounded-bottom ps-5 pe-5">
                  <div className="d-grid mb-4">
                    <button type="submit" className="btn btn-primary link">
                      <i className="fas fa-arrow-circle-left"></i> Registrar
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-12 bg-white mb-3 rounded-bottom ps-5 pe-5">
                <div className="d-grid mb-4">
                  <Link to="/" className="btn btn-primary link">
                    <i className="fas fa-arrow-circle-left"></i> Volver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registro;

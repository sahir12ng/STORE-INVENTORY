import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./estilo.css";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const fakeAuthentication = (user, pass) => {
  console.log('Credenciales recibidas:', user, pass);
  const isAuthenticated = user === 'usuario' && pass === 'contraseña';
  console.log('Autenticación exitosa:', isAuthenticated);

  return isAuthenticated;
};

const handleLogin = () => {
  try {
    const isAuthenticated = fakeAuthentication(username, password);

    if (isAuthenticated) {
      console.log('Autenticación exitosa');
      window.location.href = '/Menu';
    } else {
      console.error('Error de autenticación');
    }
  } catch (error) {
    console.error('Error inesperado', error);
  }
};

const handleCreateUser = () => {
  const nuevoUsuario = {
    username: 'nuevoUsuario',
    password: 'nuevaContraseña',
  };
  console.log('Nuevo usuario creado:', nuevoUsuario);
};

return (
  <div className="container-fluid-2 d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4 fs-3">Iniciar Sesión</h2>
          <div className="mb-4">
            <label htmlFor="username" className="form-label fs-5">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control fs-5"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fs-5">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control fs-5"
              required
            />
          </div>
          <div className="text-center">
            <div className="d-grid mb-4">
              <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>
                Entrar
              </button>
            </div>
            <div className="d-grid mb-4">
              <button type="button" className="btn btn-link fs-6">
                ¿Olvidó la contraseña?
              </button>
            </div>
            <div className="d-grid mb-4">
              {/* Agrega un botón para crear un nuevo usuario */}
              <button type="button" className="btn btn-success" onClick={handleCreateUser}>
                Crear Nuevo Usuario
              </button>
            </div>
            <p className="mt-3 fs-6">¿No tienes una cuenta? <Link to="/Crear">Regístrate</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

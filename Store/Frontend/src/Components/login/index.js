import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="form-control"
              required
            />
          </div>
          <div className="text-center">
            <div className="d-grid mb-4">
              <Link to="/Menu" className="btn btn-primary">
                Entrar
              </Link>
            </div>
            <div className="d-grid mb-4">
              <button type="button" className="btn btn-link" >
                ¿Olvidó la contraseña?
              </button>
            </div>
            <p className="mt-3">¿No tienes una cuenta? <Link to="/Crear">Regístrate</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

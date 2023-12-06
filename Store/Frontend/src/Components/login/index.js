import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Información del usuario:', responseData.user);
  
        // Almacena la información del usuario en sessionStorage
        sessionStorage.setItem('user', JSON.stringify(responseData.user));
  
        // Imprime el token almacenado en sessionStorage
        console.log('Token almacenado en sessionStorage:', responseData.user.token);
        
        // Redirecciona a la página '/Menu'
        window.location.href = '/Menu';
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError(`Error durante el inicio de sesión: ${error.message}`);
    }
  };
  


  return (
    <div className="container-fluid-2 d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4 fs-3">Iniciar Sesión</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-4">
            <label htmlFor="username" className="form-label fs-5">
              Usuario:
            </label>
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
            <label htmlFor="password" className="form-label fs-5">
              Contraseña:
            </label>
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
              <p className="mt-3 fs-6">
                ¿No tienes una cuenta? <Link to="/pass">¿Olvidó su contraseña?</Link>
              </p>
            </div>
            <p className="mt-3 fs-6">
              ¿No tienes una cuenta? <Link to="/Crear">Regístrate</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

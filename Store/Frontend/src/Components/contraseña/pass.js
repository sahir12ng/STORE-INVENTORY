import React, { useState } from 'react';
import "./pass.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:3000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        // Manejar errores HTTP (códigos 4xx y 5xx)
        const errorMessage = await response.text();
        console.error('Error al solicitar el restablecimiento de contraseña:', errorMessage);
        setMessage('Error al solicitar el restablecimiento de contraseña.');
        return;
      }
  
      const responseData = await response.json();
      setMessage('Correo electrónico de restablecimiento de contraseña enviado con éxito.');
    } catch (error) {
      console.error('Error al solicitar el restablecimiento de contraseña:', error);
      setMessage('Error al solicitar el restablecimiento de contraseña.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <input
        className="email-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="reset-button" onClick={handleForgotPassword}>
        Send Reset Email
      </button>
      <p className="message">{message}</p>
    </div>
  );
};

export default ForgotPassword;
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginExitoso, setLoginExitoso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulando proceso de inicio de sesión
    setTimeout(() => {
      setLoginExitoso(true);
      setFormData({
        username: '',
        password: '',
      });
      setTimeout(() => {
        setLoginExitoso(false);
      }, 5000); // Ocultar el mensaje de inicio de sesión después de 5 segundos
    }, 1000); // Simular un retraso de 1 segundo para el inicio de sesión
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginExitoso && (
        <div className="login-exitoso">
          <p>Login correcto</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;

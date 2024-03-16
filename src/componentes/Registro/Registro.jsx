import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulando el envío de datos a la base de datos
    // Aquí podrías realizar la lógica real de enviar datos a tu API
    setTimeout(() => {
      setRegistroExitoso(true);
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      setTimeout(() => {
        setRegistroExitoso(false);
      }, 5000); // Ocultar el cartel después de 5 segundos
    }, 1000); // Simular un retraso de 1 segundo para el registro exitoso
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      {registroExitoso && (
        <div className="registro-exitoso">
          <p>¡Registro exitoso!</p>
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
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;

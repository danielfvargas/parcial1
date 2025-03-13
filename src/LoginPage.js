import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5 || password.length > 8) {
      setError('La contraseña debe tener entre 5 y 8 caracteres');
    } else {
      setError('');
      navigate('/home'); 
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="text-container">
          <h1>TOO GOOD TO GO</h1>
          <p>FOOD WASTING SOLUTION</p>
        </div>
        <img 
          src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" 
          alt="Delicious food" 
          className="food-image"
        />
      </div>
      <div className="right-section">
        <div className="login-form">
          <input 
            type="text" 
            placeholder="Username" 
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error-message">{error}</div>}
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button className="login-button" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LoginPage.css';

function LoginPage() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5 || password.length > 8) {
      setError(t('error.password_length'));
    } else {
      setError('');
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="text-container">
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>
          <div className="language-switcher">
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            <button onClick={() => i18n.changeLanguage('es')}>ES</button>
            <button onClick={() => i18n.changeLanguage('pt')}>PT</button>
          </div>
        </div>
        <img 
          src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" 
          alt={t('alt.food_image')} 
          className="food-image"
        />
      </div>
      <div className="right-section">
        <div className="login-form">
          <input 
            type="text" 
            placeholder={t('placeholder.username')} 
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder={t('placeholder.password')} 
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error-message">{error}</div>}
          <a href="#" className="forgot-password">{t('forgot_password')}</a>
          <button className="login-button" onClick={handleSubmit}>{t('login')}</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
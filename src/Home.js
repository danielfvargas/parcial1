import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="home-container">
      <div className="menu-container">
        <div className="language-switcher">
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('es')}>ES</button>
          <button onClick={() => i18n.changeLanguage('pt')}>PT</button>
        </div>
        <Link to="/menu">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/1079/1079176.png" alt={t('alt.menu_icon')} />
            <p>{t('menu')}</p>
          </div>
        </Link>
        <Link to="/store">
        <div className="icon">
          <img src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt={t('alt.stores_icon')} />
          <p>{t('stores')}</p>
        </div>
        </Link>
        <div className="icon">
          <img src="https://images.vexels.com/media/users/3/155845/isolated/preview/8840ae67a4baa51b2ce899a7fbb783f7-push-cart-icon-graphic.png" alt={t('alt.cart_icon')} />
          <p>{t('cart')}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

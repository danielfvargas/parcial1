import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.css';

function Menu() {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '',
    '',
    ''
  ];

  const items = [
    { img: '', title: t('cheese') },
    { img: '', title: t('bread') },
    { img: '', title: t('ham') },
    { img: '', title: t('lettuce') }
  ];

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="menu-page-container">
      <div className="menu-header">
        <div className="language-switcher" style={{ position: 'absolute', left: '10px' }}>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('es')}>ES</button>
          <button onClick={() => i18n.changeLanguage('pt')}>PT</button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/1079/1079176.png" alt="Menu Logo Left" className="menu-logo" />
        <h1>{t('menu')}</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/1079/1079176.png" alt="Menu Logo Right" className="menu-logo" />
      </div>
      <div className="carousel-container">
        <button className="carousel-button" onClick={handlePrev}>&lt;</button>
        <img src={images[currentImage]} alt={t('menu_item')} className="carousel-image" />
        <button className="carousel-button" onClick={handleNext}>&gt;</button>
      </div>

      <div className="menu-items">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.title} className="menu-item-image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
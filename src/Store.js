import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Store.css';

function Store() {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'imagen',
    'imagen',
    'imagen'
  ];

  const items = [
    { img: 'imagen', title: t('store1') },
    { img: 'imagen', title: t('store2') },
    { img: 'imagen', title: t('store3') },
    { img: 'imagen', title: t('store4') }
  ];

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="store-page-container">
      <div className="menu-header">
        <div className="language-switcher" style={{ position: 'absolute', left: '10px' }}>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('es')}>ES</button>
          <button onClick={() => i18n.changeLanguage('pt')}>PT</button>
        </div>
        <img src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="Store Logo Left" className="menu-logo" />
        <h1>{t('stores')}</h1>
        <img src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="Store Logo Right" className="menu-logo" />
      </div>
      <div className="carousel-container">
        <button className="carousel-button" onClick={handlePrev}>&lt;</button>
        <img src={images[currentImage]} alt={t('store_item')} className="carousel-image" />
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

export default Store;
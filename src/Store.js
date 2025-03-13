import React, { useState } from 'react';
import './Store.css';

function Store() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'imagen',
    'imagen',
    'imagen'
  ];

  const items = [
    { img: 'imagen', title: 'STORE 1' }, 
    { img: 'imagen', title: 'STORE 2' },
    { img: 'imagen', title: 'STORE 3' },
    { img: 'imagen', title: 'STORE 4' }
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
        <img src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="Store Logo Left" className="menu-logo" />
        <h1>STORES</h1>
        <img src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="Store Logo Right" className="menu-logo" />
      </div>
      <div className="carousel-container">
        <button className="carousel-button" onClick={handlePrev}>&lt;</button>
        <img src={images[currentImage]} alt="Store Item" className="carousel-image" />
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

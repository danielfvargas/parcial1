import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '',
    '',
    ''
  ];

  const items = [
    { img: '', title: 'CHEESE' },
    { img: '', title: 'BREAD' },
    { img: '', title: 'HAM' },
    { img: '', title: 'LETTUCE' }
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
        <img src="https://cdn-icons-png.flaticon.com/512/1079/1079176.png" alt="Menu Logo Left" className="menu-logo" />
        <h1>MENU</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/1079/1079176.png" alt="Menu Logo Right" className="menu-logo" />
      </div>
      <div className="carousel-container">
        <button className="carousel-button" onClick={handlePrev}>&lt;</button>
        <img src={images[currentImage]} alt="Menu Item" className="carousel-image" />
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

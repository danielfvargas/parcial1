import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="menu-container">
        <Link to="/menu">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/1079/1079176.png" alt="Menu Icon" />
            <p>Menu</p>
          </div>
        </Link>
        <div className="icon">
          <img src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="Stores Icon" />
          <p>Stores</p>
        </div>
        <div className="icon">
          <img src="https://images.vexels.com/media/users/3/155845/isolated/preview/8840ae67a4baa51b2ce899a7fbb783f7-push-cart-icon-graphic.png" alt="Cart Icon" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">La Anri</h1>
          <p className="hero-subtitle">Make-Up Artistry</p>
          <p className="hero-description">
            Discover our exquisite collection of premium cosmetics crafted to enhance your natural beauty.
          </p>
          
          <div className="hero-actions">
            <Link to="/products" className="btn btn-pink">
              Explore Products
            </Link>
            <Link to="/products" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">✨</span>
              <h3>Premium Quality</h3>
              <p>Carefully curated cosmetics for every skin type</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <h3>Artist Approved</h3>
              <p>Trusted by professional make-up artists</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💫</span>
              <h3>Skin Care First</h3>
              <p>Gentle formulas that care for your skin</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Logo from public folder */}
          <div className="logo-placeholder">
            <img src="/logo1.webp" alt="La Anri Logo" className="logo-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-grid">
          <a href="/" className="logo-link">
            <div className="logo">
              <span className="logo-white">VV</span>
              <span className="logo-yellow">.</span>
              <span className="logo-yellow">S</span>
              <span className="logo-white">C</span>
            </div>
            <div className="logo-subtitle">
              WORLD STREET CULTURE<br />
              <span className="logo-subtitle-small">
                (Exploring the pulse of urban creativity across the globe)
              </span>
            </div>
          </a>
          
          <nav className="nav">
            <a href="/videos/youtube" className="nav-link">YouTube</a>
            <a href="/videos/tiktok" className="nav-link">TikTok</a>
            <a href="/articles" className="nav-link">記事</a>
          </nav>

          <div className="social-links">
            <a href="#" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

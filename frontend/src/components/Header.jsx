import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Instagram, Youtube, Menu, X } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-grid">
          <a href="/" className="logo-link" onClick={closeMobileMenu}>
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
          
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <a href="/videos/youtube" className="nav-link">YouTube</a>
            <a href="/videos/tiktok" className="nav-link">TikTok</a>
            <a href="/posts/instagram" className="nav-link">Instagram</a>
            <a href="/articles" className="nav-link">記事</a>
          </nav>

          {/* Desktop Social Links */}
          <div className="social-links desktop-social">
            <a href="#" className="social-link">
              <Youtube size={20} />
            </a>
            <a href="#" className="social-link">
              <TikTokIcon size={20} color="#fff" />
            </a>
            <a href="#" className="social-link">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - using Portal */}
      {mobileMenuOpen && ReactDOM.createPortal(
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <div className="mobile-menu-header">
              <button className="mobile-menu-close" onClick={closeMobileMenu}>
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav">
              <a href="/videos/youtube" className="mobile-nav-link" onClick={closeMobileMenu}>
                YouTube
              </a>
              <a href="/videos/tiktok" className="mobile-nav-link" onClick={closeMobileMenu}>
                TikTok
              </a>
              <a href="/posts/instagram" className="mobile-nav-link" onClick={closeMobileMenu}>
                Instagram
              </a>
              <a href="/articles" className="mobile-nav-link" onClick={closeMobileMenu}>
                記事
              </a>
            </nav>

            <div className="mobile-social-links">
              <p className="mobile-social-title">フォローする</p>
              <div className="mobile-social-icons">
                <a href="#" className="mobile-social-link">
                  <Youtube size={20} />
                </a>
                <a href="#" className="mobile-social-link">
                  <TikTokIcon size={20} color="#9ca3af" />
                </a>
                <a href="#" className="mobile-social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;

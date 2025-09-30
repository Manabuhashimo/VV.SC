import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="logo-white">VV</span>
              <span className="logo-yellow">.</span>
              <span className="logo-yellow">S</span>
              <span className="logo-white">C</span>
            </div>
            <p className="footer-description">
              世界中のストリートカルチャーを記録し、祝福する。
            </p>
          </div>
          <div>
            <h4 className="footer-title">コンテンツ</h4>
            <ul className="footer-links">
              <li><a href="/videos" className="footer-link">動画</a></li>
              <li><a href="/articles" className="footer-link">記事</a></li>
              <li><a href="/categories" className="footer-link">カテゴリー</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">サイト情報</h4>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">VV.SCについて</a></li>
              <li><a href="/contact" className="footer-link">問い合わせ</a></li>
              <li><a href="/privacy" className="footer-link">プライバシーポリシー</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">フォローする</h4>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="#" className="social-link">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 VV.SC - World Street Culture. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

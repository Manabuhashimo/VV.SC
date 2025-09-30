import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const categories = [
    { name: 'Fashion', icon: '👕', color: 'linear-gradient(to bottom right, #eab308, #f97316)' },
    { name: 'Music', icon: '🎵', color: 'linear-gradient(to bottom right, #a855f7, #ec4899)' },
    { name: 'Art', icon: '🎨', color: 'linear-gradient(to bottom right, #f97316, #ef4444)' },
    { name: 'Sport', icon: '⚽', color: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)' }
  ];

  return (
    <div className="container">
      <Header />

      <section className="section mt-20">
        <div className="about-hero">
          <h1 className="about-title">
            <span className="logo-white">VV</span>
            <span className="logo-yellow">.</span>
            <span className="logo-yellow">S</span>
            <span className="logo-white">C</span>
          </h1>
          <p className="about-subtitle">WORLD STREET CULTURE</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2 className="about-heading">
              VV.SCについて
            </h2>
            <div className="about-text">
              <p>
                <strong>VV.SC（ワールドストリートカルチャー）</strong>とは、ファッション、ストリートカルチャー、アート、ミュージック、スポーツなど多岐にわたる分野の最新情報を発信する、日本発のグローバルデジタルメディア（ウェブメディア）です。
              </p>
              <p>
                2025年に設立されました。
              </p>
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-heading">
              私たちのミッション
            </h2>
            <div className="about-text">
              <p>
                世界中のストリートカルチャーを記録し、祝福する。
                都市の創造性の鼓動を探求し、グローバルに共有することで、
                文化の境界を越えた新しいつながりを生み出します。
              </p>
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-heading">
              カバーする分野
            </h2>
            <div className="categories-showcase">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="category-showcase-card"
                  style={{ background: category.color }}
                >
                  <div className="category-showcase-icon">{category.icon}</div>
                  <h3 className="category-showcase-name">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-heading">
              私たちのビジョン
            </h2>
            <div className="about-text">
              <p>
                ストリートカルチャーは、常に時代の最先端を走り、社会に新しい価値観をもたらしてきました。
                私たちは、その魅力と影響力を世界中に伝えることで、
                文化の多様性を尊重し、次世代のクリエイターたちにインスピレーションを与えます。
              </p>
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-heading">
              コンテンツの特徴
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📺</div>
                <h3 className="feature-title">動画コンテンツ</h3>
                <p className="feature-description">
                  厳選されたストリートカルチャーに関する動画を紹介
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📰</div>
                <h3 className="feature-title">記事・ニュース</h3>
                <p className="feature-description">
                  最新トレンドやインタビュー、深掘り記事など多彩なコンテンツを配信
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">グローバル視点</h3>
                <p className="feature-description">
                  東京、ニューヨーク、パリなど世界各都市のストリートシーンを追跡
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">キュレーション</h3>
                <p className="feature-description">
                  専門のライターが厳選した質の高いコンテンツのみを提供
                </p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2 className="about-cta-title">
              ストリートカルチャーの最前線を、<br />
              あなたと共に。
            </h2>
            <p className="about-cta-text">
              最新のコンテンツをチェックして、世界中のストリートシーンとつながりましょう。
            </p>
            <div className="about-cta-buttons">
              <a href="/videos/youtube" className="cta-button cta-button-primary">
                動画を見る
              </a>
              <a href="/articles" className="cta-button cta-button-secondary">
                記事を読む
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

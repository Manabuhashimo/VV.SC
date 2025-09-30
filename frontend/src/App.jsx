import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import YouTubeVideos from './pages/YouTubeVideos';
import TikTokVideos from './pages/TikTokVideos';
import InstagramPosts from './pages/InstagramPosts';
import Articles from './pages/Articles';
import About from './pages/About';
import Privacy from './pages/Privacy';
import LocationPage from './pages/LocationPage';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/about.css';
import './styles/legal.css';
import './styles/locations.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/youtube" element={<YouTubeVideos />} />
        <Route path="/videos/tiktok" element={<TikTokVideos />} />
        <Route path="/posts/instagram" element={<InstagramPosts />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/:slug" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
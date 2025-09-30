import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import YouTubeVideos from './pages/YouTubeVideos';
import TikTokVideos from './pages/TikTokVideos';
import Articles from './pages/Articles';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/youtube" element={<YouTubeVideos />} />
        <Route path="/videos/tiktok" element={<TikTokVideos />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
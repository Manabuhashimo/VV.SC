import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import ArticleCard from '../components/ArticleCard';
import LocationCard from '../components/LocationCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const Home = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [tiktokVideos, setTiktokVideos] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(videoId);
    console.log('Playing video:', videoId);
  };

  // バックエンドからデータ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 並列でデータを取得
        const [youtubeRes, tiktokRes, instagramRes, articlesRes, locationsRes] = await Promise.all([
          axios.get(`${API_URL}/api/videos?platform=youtube`),
          axios.get(`${API_URL}/api/videos?platform=tiktok`),
          axios.get(`${API_URL}/api/videos?platform=instagram`),
          axios.get(`${API_URL}/api/articles`),
          axios.get(`${API_URL}/api/locations`)
        ]);

        // データ構造をフロントエンドの形式に変換
        const mapVideo = (video) => ({
          id: video.id,
          title: video.title,
          thumbnail: video.thumbnail_url,
          duration: video.duration,
          views: video.views,
          likes: video.likes,
          category: video.category,
          location: video.location_id,
          locationId: video.location_id,
          articleId: video.article_id,
          platform: video.platform
        });

        const mapArticle = (article) => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          image: article.image_url,
          category: article.category,
          location: article.location_id,
          locationId: article.location_id,
          date: article.published_at,
          author: article.author
        });

        const mapLocation = (location) => ({
          id: location.id,
          name: location.name,
          slug: location.slug,
          bannerImage: location.banner_image_url,
          color: location.color
        });

        setYoutubeVideos(youtubeRes.data.map(mapVideo));
        setTiktokVideos(tiktokRes.data.map(mapVideo));
        setInstagramPosts(instagramRes.data.map(mapVideo));
        setArticles(articlesRes.data.map(mapArticle));
        setLocations(locationsRes.data.map(mapLocation));
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Header />
        <div style={{ textAlign: 'center', padding: '4rem', color: '#fff' }}>
          Loading...
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />

      {/* YouTube Videos */}
      <section className="section mt-20">
        <div className="section-header">
          <h2 className="section-title">
            YOUTUBE <span className="logo-yellow">VIDEOS</span>
          </h2>
          <a href="/videos/youtube" className="view-all-link">
            View All <ChevronRight size={20} />
          </a>
        </div>

        <div className="scroll-container scrollbar-hide">
          <div className="scroll-content">
            {youtubeVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Videos */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            TIKTOK <span className="logo-yellow">VIDEOS</span>
          </h2>
          <a href="/videos/tiktok" className="view-all-link">
            View All <ChevronRight size={20} />
          </a>
        </div>

        <div className="scroll-container scrollbar-hide">
          <div className="scroll-content">
            {tiktokVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            INSTAGRAM <span className="logo-yellow">POSTS</span>
          </h2>
          <a href="/posts/instagram" className="view-all-link">
            View All <ChevronRight size={20} />
          </a>
        </div>

        <div className="scroll-container scrollbar-hide">
          <div className="scroll-content">
            {instagramPosts.map((post) => (
              <VideoCard 
                key={post.id} 
                video={post} 
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section bg-gradient">
        <div className="section-header">
          <h2 className="section-title">
            FEATURED <span className="logo-yellow">ARTICLES</span>
          </h2>
          <a href="/articles" className="view-all-link">
            View All <ChevronRight size={20} />
          </a>
        </div>

        <div className="scroll-container scrollbar-hide">
          <div className="scroll-content">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section">
        <h2 className="locations-title">
          EXPLORE BY <span className="logo-yellow">LOCATION</span>
        </h2>

        <div className="locations-grid">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

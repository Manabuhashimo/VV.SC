import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import ArticleCard from '../components/ArticleCard';
import { ChevronRight } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const LocationPage = () => {
  const { slug } = useParams();
  const [location, setLocation] = useState(null);
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        setLoading(true);

        // ロケーション情報を取得
        const locationsRes = await axios.get(`${API_URL}/api/locations`);
        const currentLocation = locationsRes.data.find(loc => loc.slug === slug);

        if (!currentLocation) {
          setLoading(false);
          return;
        }

        setLocation(currentLocation);

        // そのロケーションの動画と記事を取得
        const [videosRes, articlesRes] = await Promise.all([
          axios.get(`${API_URL}/api/videos?location_id=${currentLocation.id}`),
          axios.get(`${API_URL}/api/articles?location_id=${currentLocation.id}`)
        ]);

        // データ構造を変換
        const mapVideo = (video) => ({
          id: video.id,
          title: video.title,
          thumbnail: video.thumbnail_url,
          duration: video.duration,
          views: video.views,
          likes: video.likes,
          category: video.category,
          platform: video.platform
        });

        const mapArticle = (article) => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          image: article.image_url,
          category: article.category,
          date: article.published_at,
          author: article.author
        });

        setVideos(videosRes.data.map(mapVideo));
        setArticles(articlesRes.data.map(mapArticle));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching location data:', error);
        setLoading(false);
      }
    };

    fetchLocationData();
  }, [slug]);

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

  if (!location) {
    return (
      <div className="container">
        <Header />
        <div style={{ textAlign: 'center', padding: '4rem', color: '#fff' }}>
          <h1>Location not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />

      {/* Location Banner */}
      <section className="location-hero" style={{
        backgroundImage: `url(${location.banner_image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        position: 'relative',
        marginTop: '80px',
        borderRadius: '1rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 900,
            color: '#fff',
            textShadow: '3px 3px 10px rgba(0,0,0,0.8)'
          }}>
            {location.name}
          </h1>
        </div>
      </section>

      {/* Videos Section */}
      {videos.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              VIDEOS FROM <span className="logo-yellow">{location.name.toUpperCase()}</span>
            </h2>
          </div>

          <div className="scroll-container scrollbar-hide">
            <div className="scroll-content">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="section bg-gradient">
          <div className="section-header">
            <h2 className="section-title">
              ARTICLES FROM <span className="logo-yellow">{location.name.toUpperCase()}</span>
            </h2>
          </div>

          <div className="scroll-container scrollbar-hide">
            <div className="scroll-content">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {videos.length === 0 && articles.length === 0 && (
        <section className="section" style={{ textAlign: 'center', padding: '4rem' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            No content available for {location.name} yet
          </h2>
          <p style={{ color: '#999' }}>
            Check back soon for videos and articles from this location!
          </p>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default LocationPage;

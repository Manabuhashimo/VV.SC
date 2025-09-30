import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import ArticleCard from '../components/ArticleCard';
import CategoryCard from '../components/CategoryCard';
import { youtubeVideos, tiktokVideos, instagramPosts, articlesData, categories } from '../models/data';

const Home = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(videoId);
    // ここに動画再生のロジックを追加
    console.log('Playing video:', videoId);
  };

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
            {articlesData.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2 className="categories-title">
          EXPLORE BY <span className="logo-yellow">CATEGORY</span>
        </h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

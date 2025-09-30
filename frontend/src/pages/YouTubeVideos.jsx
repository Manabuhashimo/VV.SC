import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { youtubeVideos } from '../models/data';

const ITEMS_PER_PAGE = 18;

const YouTubeVideos = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // カテゴリ一覧を取得
  const categories = useMemo(() => {
    return [...new Set(youtubeVideos.map(v => v.category))];
  }, []);

  // フィルター＆ソート済みの動画
  const filteredAndSortedVideos = useMemo(() => {
    let filtered = youtubeVideos;

    // カテゴリフィルター
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(v => v.category === selectedCategory);
    }

    // ソート
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        case 'popular':
          // viewsの数値化（125K → 125000）
          const parseViews = (views) => {
            const num = parseFloat(views);
            if (views.includes('M')) return num * 1000000;
            if (views.includes('K')) return num * 1000;
            return num;
          };
          return parseViews(b.views) - parseViews(a.views);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  // ページネーション
  const totalPages = Math.ceil(filteredAndSortedVideos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedVideos = filteredAndSortedVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayVideo = (videoId) => {
    console.log('Playing video:', videoId);
    // 動画再生のロジックを追加
  };

  return (
    <div className="container">
      <Header />

      <section className="section mt-20">
        <div className="page-header">
          <h1 className="page-title">
            YOUTUBE <span className="logo-yellow">VIDEOS</span>
          </h1>
          <p className="page-subtitle">
            {filteredAndSortedVideos.length}件の動画
          </p>
        </div>

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          onSortChange={(sort) => {
            setSortBy(sort);
            setCurrentPage(1);
          }}
        />

        <div className="videos-grid">
          {paginatedVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={handlePlayVideo}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>

      <Footer />
    </div>
  );
};

export default YouTubeVideos;

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { instagramPosts } from '../models/data';

const ITEMS_PER_PAGE = 18;

const InstagramPosts = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // カテゴリ一覧を取得
  const categories = useMemo(() => {
    return [...new Set(instagramPosts.map(p => p.category))];
  }, []);

  // フィルター＆ソート済みの投稿
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = instagramPosts;

    // カテゴリフィルター
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // ソート
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        case 'popular':
          // likesの数値化（15.2K → 15200）
          const parseLikes = (likes) => {
            const num = parseFloat(likes);
            if (likes.includes('M')) return num * 1000000;
            if (likes.includes('K')) return num * 1000;
            return num;
          };
          return parseLikes(b.likes) - parseLikes(a.likes);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  // ページネーション
  const totalPages = Math.ceil(filteredAndSortedPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredAndSortedPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayVideo = (postId) => {
    console.log('Opening Instagram post:', postId);
    // Instagram投稿を開くロジックを追加
  };

  return (
    <div className="container">
      <Header />

      <section className="section mt-20">
        <div className="page-header">
          <h1 className="page-title">
            INSTAGRAM <span className="logo-yellow">POSTS</span>
          </h1>
          <p className="page-subtitle">
            {filteredAndSortedPosts.length}件の投稿
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
          {paginatedPosts.map((post) => (
            <VideoCard
              key={post.id}
              video={post}
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

export default InstagramPosts;

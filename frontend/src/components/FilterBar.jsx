import React from 'react';

const FilterBar = ({ categories, selectedCategory, onCategoryChange, sortBy, onSortChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <label className="filter-label">カテゴリ:</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">すべて</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label className="filter-label">並び替え:</label>
        <select 
          value={sortBy} 
          onChange={(e) => onSortChange(e.target.value)}
          className="filter-select"
        >
          <option value="newest">新しい順</option>
          <option value="oldest">古い順</option>
          <option value="popular">人気順</option>
          <option value="title">タイトル順</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;

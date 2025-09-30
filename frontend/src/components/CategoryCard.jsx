import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <a
      href={`/categories/${category.name.toLowerCase()}`}
      className="category-card"
      style={{ background: category.color }}
    >
      <div className="category-icon">{category.icon}</div>
      <h3 className="category-name">{category.name}</h3>
    </a>
  );
};

export default CategoryCard;

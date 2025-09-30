import React from 'react';
import { ChevronRight } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <div className="article-image">
        <img src={article.image} alt={article.title} />
        <div className="article-category">{article.category}</div>
      </div>
      <div className="article-content">
        <div className="article-meta">
          {article.date} • By {article.author}
        </div>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <a href={`/articles/${article.id}`} className="read-more">
          Read More <ChevronRight size={16} />
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;

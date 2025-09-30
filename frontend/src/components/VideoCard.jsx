import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const VideoCard = ({ video, onPlay }) => {
  return (
    <div 
      className="video-card"
      onClick={() => onPlay && onPlay(video.id)}
    >
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="video-overlay">
          <div className="play-button">
            <Play size={28} color="#000" fill="#000" style={{ marginLeft: '4px' }} />
          </div>
        </div>
        <div className="video-duration">{video.duration}</div>
        <div className="video-category">{video.category}</div>
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-meta">
          <span>{video.views} views</span>
          {video.articleId && (
            <a 
              href={`/articles/${video.articleId}`}
              className="article-link"
              onClick={(e) => e.stopPropagation()}
            >
              Read Article <ChevronRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

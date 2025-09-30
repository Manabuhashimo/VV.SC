import React from 'react';
import { Play, ChevronRight, Youtube } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const VideoCard = ({ video, onPlay }) => {
  const isYouTube = video.platform === 'youtube';
  const isTikTok = video.platform === 'tiktok';

  return (
    <div 
      className="video-card"
      onClick={() => onPlay && onPlay(video.id)}
    >
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="video-overlay">
          <div className={`play-button ${isYouTube ? 'play-button-youtube' : isTikTok ? 'play-button-tiktok' : ''}`}>
            <Play size={28} color="#fff" fill="#fff" style={{ marginLeft: '4px' }} />
          </div>
        </div>
        <div className="video-duration">{video.duration}</div>
        <div className="video-category">{video.category}</div>
        
        {/* Platform Badge */}
        {video.platform && (
          <div className={`platform-badge ${isYouTube ? 'platform-badge-youtube' : isTikTok ? 'platform-badge-tiktok' : ''}`}>
            {isYouTube && <Youtube size={16} />}
            {isTikTok && <TikTokIcon size={16} />}
            <span>{isYouTube ? 'YouTube' : isTikTok ? 'TikTok' : video.platform}</span>
          </div>
        )}
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

CREATE DATABASE IF NOT EXISTS vvsc_db;
USE vvsc_db;

-- Videos Table
CREATE TABLE IF NOT EXISTS videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    youtube_url VARCHAR(255) NOT NULL,
    thumbnail_url VARCHAR(255),
    duration VARCHAR(10),
    views VARCHAR(20),
    category VARCHAR(50),
    article_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Articles Table
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    image_url VARCHAR(255),
    category VARCHAR(50),
    author VARCHAR(100),
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    icon VARCHAR(10),
    color VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample categories
INSERT INTO categories (name, slug, icon, color) VALUES
('Fashion', 'fashion', '👕', 'linear-gradient(to bottom right, #eab308, #f97316)'),
('Music', 'music', '🎵', 'linear-gradient(to bottom right, #a855f7, #ec4899)'),
('Art', 'art', '🎨', 'linear-gradient(to bottom right, #f97316, #ef4444)'),
('Sport', 'sport', '⚽', 'linear-gradient(to bottom right, #3b82f6, #06b6d4)')
ON DUPLICATE KEY UPDATE name=name;

-- Insert sample video
INSERT INTO videos (title, youtube_url, thumbnail_url, duration, views, category, article_id) VALUES
('Tokyo Underground: Hip-Hop Scene 2025', 'https://youtube.com/watch?v=sample', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop', '12:45', '125K', 'Music', 1)
ON DUPLICATE KEY UPDATE title=title;

-- Insert sample article
INSERT INTO articles (title, slug, excerpt, content, image_url, category, author, published_at) VALUES
('The Evolution of Tokyo Underground Hip-Hop Scene', 'tokyo-underground-hip-hop', 'Exploring how Tokyo hip-hop culture has transformed...', 'Full article content here...', 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop', 'Music', 'Yuki Tanaka', NOW())
ON DUPLICATE KEY UPDATE title=title;
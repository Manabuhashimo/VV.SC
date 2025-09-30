// 地名データ（ロケーション）
export const locations = [
  {
    id: 1,
    name: "Tokyo",
    slug: "tokyo",
    bannerImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=400&fit=crop",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    name: "Seoul",
    slug: "seoul",
    bannerImage: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&h=400&fit=crop",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    name: "Los Angeles",
    slug: "los-angeles",
    bannerImage: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=1200&h=400&fit=crop",
    color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    id: 4,
    name: "New York",
    slug: "new-york",
    bannerImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=400&fit=crop",
    color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
  {
    id: 5,
    name: "London",
    slug: "london",
    bannerImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=400&fit=crop",
    color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  {
    id: 6,
    name: "Vancouver",
    slug: "vancouver",
    bannerImage: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&h=400&fit=crop",
    color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  }
];

// カテゴリーデータ（既存 - 念のため保持）
export const categories = [
  {
    name: "Fashion",
    color: "linear-gradient(to bottom right, #eab308, #f97316)",
    icon: "👕"
  },
  {
    name: "Music",
    color: "linear-gradient(to bottom right, #a855f7, #ec4899)",
    icon: "🎵"
  },
  {
    name: "Art",
    color: "linear-gradient(to bottom right, #f97316, #ef4444)",
    icon: "🎨"
  },
  {
    name: "Sport",
    color: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
    icon: "⚽"
  }
];

// YouTubeビデオデータ
export const youtubeVideos = [
  {
    id: 1,
    title: "Tokyo Underground: Hip-Hop Scene 2025",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop",
    duration: "12:45",
    views: "125K",
    category: "Music",
    location: "Tokyo",
    locationId: 1,
    articleId: 1,
    platform: "youtube"
  },
  {
    id: 2,
    title: "NYC Graffiti Masters: Street Art Documentary",
    thumbnail: "https://images.unsplash.com/photo-1561817255-55db3e1b3add?w=800&h=450&fit=crop",
    duration: "18:20",
    views: "89K",
    category: "Art",
    location: "New York",
    locationId: 4,
    articleId: 2,
    platform: "youtube"
  },
  {
    id: 3,
    title: "Skateboarding Revolution in LA",
    thumbnail: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&h=450&fit=crop",
    duration: "15:30",
    views: "200K",
    category: "Sport",
    location: "Los Angeles",
    locationId: 3,
    articleId: 3,
    platform: "youtube"
  },
  {
    id: 4,
    title: "London Fashion Week: Street Style",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=450&fit=crop",
    duration: "10:15",
    views: "156K",
    category: "Fashion",
    location: "London",
    locationId: 5,
    articleId: 4,
    platform: "youtube"
  }
];

// TikTokビデオデータ
export const tiktokVideos = [
  {
    id: 5,
    title: "Street Dance Battle in Seoul",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=450&fit=crop",
    duration: "0:45",
    views: "2.3M",
    category: "Music",
    location: "Seoul",
    locationId: 2,
    articleId: 5,
    platform: "tiktok"
  },
  {
    id: 6,
    title: "Urban Fashion Lookbook",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=450&fit=crop",
    duration: "0:30",
    views: "1.8M",
    category: "Fashion",
    location: "Tokyo",
    locationId: 1,
    articleId: 6,
    platform: "tiktok"
  },
  {
    id: 7,
    title: "Street Art Time-lapse",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
    duration: "0:58",
    views: "950K",
    category: "Art",
    location: "Los Angeles",
    locationId: 3,
    articleId: 7,
    platform: "tiktok"
  },
  {
    id: 8,
    title: "Skateboard Tricks Compilation",
    thumbnail: "https://images.unsplash.com/photo-1520338258135-607c3cda82b1?w=800&h=450&fit=crop",
    duration: "0:42",
    views: "3.1M",
    category: "Sport",
    location: "Vancouver",
    locationId: 6,
    articleId: 8,
    platform: "tiktok"
  }
];

// Instagramポストデータ
export const instagramPosts = [
  {
    id: 9,
    title: "Tokyo Street Fashion Week",
    thumbnail: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=800&fit=crop",
    likes: "15.2K",
    views: "89K",
    category: "Fashion",
    location: "Tokyo",
    locationId: 1,
    articleId: 4,
    platform: "instagram"
  },
  {
    id: 10,
    title: "Urban Art Gallery Opening",
    thumbnail: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&h=800&fit=crop",
    likes: "8.9K",
    views: "45K",
    category: "Art",
    location: "New York",
    locationId: 4,
    articleId: 2,
    platform: "instagram"
  },
  {
    id: 11,
    title: "Hip-Hop Culture Showcase",
    thumbnail: "https://images.unsplash.com/photo-1571609803939-54f463a82e6e?w=800&h=800&fit=crop",
    likes: "22.5K",
    views: "120K",
    category: "Music",
    location: "Seoul",
    locationId: 2,
    articleId: 1,
    platform: "instagram"
  },
  {
    id: 12,
    title: "Skateboard Park Sessions",
    thumbnail: "https://images.unsplash.com/photo-1564982752979-3f7bc974735e?w=800&h=800&fit=crop",
    likes: "18.7K",
    views: "95K",
    category: "Sport",
    location: "Vancouver",
    locationId: 6,
    articleId: 3,
    platform: "instagram"
  }
];

// 後方互換性のため
export const videosData = [...youtubeVideos, ...tiktokVideos, ...instagramPosts];

// 記事データ（モックデータ）
export const articlesData = [
  {
    id: 1,
    title: "The Evolution of Tokyo's Underground Hip-Hop Scene",
    excerpt: "Exploring how Tokyo's hip-hop culture has transformed from underground movement to mainstream phenomenon...",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop",
    category: "Music",
    location: "Tokyo",
    locationId: 1,
    date: "2025-09-28",
    author: "Yuki Tanaka"
  },
  {
    id: 2,
    title: "Graffiti as Art: From Vandalism to Gallery Exhibitions",
    excerpt: "The journey of street art from illegal activity to celebrated contemporary art form in major museums...",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    category: "Art",
    location: "New York",
    locationId: 4,
    date: "2025-09-27",
    author: "Marcus Rodriguez"
  },
  {
    id: 3,
    title: "Skateboarding Culture: More Than Just a Sport",
    excerpt: "Understanding the deep-rooted culture, community, and lifestyle that defines skateboarding worldwide...",
    image: "https://images.unsplash.com/photo-1520338258135-607c3cda82b1?w=600&h=400&fit=crop",
    category: "Sport",
    location: "Los Angeles",
    locationId: 3,
    date: "2025-09-26",
    author: "Jake Wilson"
  },
  {
    id: 4,
    title: "Street Fashion: The New Runway",
    excerpt: "How street style influencers are reshaping the fashion industry and challenging traditional haute couture...",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
    category: "Fashion",
    location: "London",
    locationId: 5,
    date: "2025-09-25",
    author: "Sophie Martin"
  },
  {
    id: 5,
    title: "Breakdancing Goes Olympic: Cultural Impact",
    excerpt: "Analyzing the significance of breaking's inclusion in the Olympics and its effect on street culture...",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&h=400&fit=crop",
    category: "Music",
    location: "Seoul",
    locationId: 2,
    date: "2025-09-24",
    author: "David Kim"
  },
  {
    id: 6,
    title: "The Rise of Asian Street Culture on Global Stage",
    excerpt: "From Seoul to Shanghai, Asian cities are becoming epicenters of contemporary street culture...",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
    category: "Fashion",
    location: "Vancouver",
    locationId: 6,
    date: "2025-09-23",
    author: "Alex Chen"
  }
];

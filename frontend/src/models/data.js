// カテゴリーデータ
export const categories = [
    {
        name: "Hip-Hop",
        color: "linear-gradient(to bottom right, #a855f7, #ec4899)",
        icon: "🎤"
    },
    {
        name: "Graffiti",
        color: "linear-gradient(to bottom right, #f97316, #ef4444)",
        icon: "🎨"
    },
    {
        name: "Skateboarding",
        color: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
        icon: "🛹"
    },
    {
        name: "Fashion",
        color: "linear-gradient(to bottom right, #eab308, #f97316)",
        icon: "👕"
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
    articleId: 3,
    platform: "youtube"
  },
  {
    id: 4,
    title: "Paris Fashion Week: Street Style",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=450&fit=crop",
    duration: "10:15",
    views: "156K",
    category: "Fashion",
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
    articleId: 8,
    platform: "tiktok"
  }
];

// 後方互換性のため
export const videosData = [...youtubeVideos, ...tiktokVideos];

// 記事データ（モックデータ）
export const articlesData = [
    {
        id: 1,
        title: "The Evolution of Tokyo's Underground Hip-Hop Scene",
        excerpt: "Exploring how Tokyo's hip-hop culture has transformed from underground movement to mainstream phenomenon...",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop",
        category: "Hip-Hop",
        date: "2025-09-28",
        author: "Yuki Tanaka"
    },
    {
        id: 2,
        title: "Graffiti as Art: From Vandalism to Gallery Exhibitions",
        excerpt: "The journey of street art from illegal activity to celebrated contemporary art form in major museums...",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        category: "Graffiti",
        date: "2025-09-27",
        author: "Marcus Rodriguez"
    },
    {
        id: 3,
        title: "Skateboarding Culture: More Than Just a Sport",
        excerpt: "Understanding the deep-rooted culture, community, and lifestyle that defines skateboarding worldwide...",
        image: "https://images.unsplash.com/photo-1520338258135-607c3cda82b1?w=600&h=400&fit=crop",
        category: "Skateboarding",
        date: "2025-09-26",
        author: "Jake Wilson"
    },
    {
        id: 4,
        title: "Street Fashion: The New Runway",
        excerpt: "How street style influencers are reshaping the fashion industry and challenging traditional haute couture...",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
        category: "Fashion",
        date: "2025-09-25",
        author: "Sophie Martin"
    },
    {
        id: 5,
        title: "Breakdancing Goes Olympic: Cultural Impact",
        excerpt: "Analyzing the significance of breaking's inclusion in the Olympics and its effect on street culture...",
        image: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&h=400&fit=crop",
        category: "Hip-Hop",
        date: "2025-09-24",
        author: "David Kim"
    },
    {
        id: 6,
        title: "The Rise of Asian Street Culture on Global Stage",
        excerpt: "From Seoul to Shanghai, Asian cities are becoming epicenters of contemporary street culture...",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
        category: "Culture",
        date: "2025-09-23",
        author: "Min-ji Park"
    }
];

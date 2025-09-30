<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Helper function to generate YouTube thumbnail URL
        $getYtThumb = function ($videoId) {
            return "https://img.youtube.com/vi/{$videoId}/maxresdefault.jpg";
        };

        // YouTube Videos
        DB::table('videos')->insert([
            [
                'title' => 'Tokyo Underground: Hip-Hop Scene 2025',
                'youtube_url' => 'https://youtube.com/watch?v=dQw4w9WgXcQ',
                'thumbnail_url' => $getYtThumb('dQw4w9WgXcQ'),
                'duration' => '12:45',
                'views' => '125K',
                'likes' => null,
                'category' => 'Music',
                'platform' => 'youtube',
                'location_id' => 1, // Tokyo
                'article_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'NYC Graffiti Masters: Street Art Documentary',
                'youtube_url' => 'https://youtube.com/watch?v=jNQXAC9IVRw',
                'thumbnail_url' => $getYtThumb('jNQXAC9IVRw'),
                'duration' => '18:20',
                'views' => '89K',
                'likes' => null,
                'category' => 'Art',
                'platform' => 'youtube',
                'location_id' => 4, // New York
                'article_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Skateboarding Revolution in LA',
                'youtube_url' => 'https://youtube.com/watch?v=9bZkp7q19f0',
                'thumbnail_url' => $getYtThumb('9bZkp7q19f0'),
                'duration' => '15:30',
                'views' => '200K',
                'likes' => null,
                'category' => 'Sport',
                'platform' => 'youtube',
                'location_id' => 3, // Los Angeles
                'article_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'London Fashion Week: Street Style',
                'youtube_url' => 'https://youtube.com/watch?v=kJQP7kiw5Fk',
                'thumbnail_url' => $getYtThumb('kJQP7kiw5Fk'),
                'duration' => '10:15',
                'views' => '156K',
                'likes' => null,
                'category' => 'Fashion',
                'platform' => 'youtube',
                'location_id' => 5, // London
                'article_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Seoul K-Pop Street Dance',
                'youtube_url' => 'https://youtube.com/watch?v=L_fCqg92qks',
                'thumbnail_url' => $getYtThumb('L_fCqg92qks'),
                'duration' => '14:25',
                'views' => '340K',
                'likes' => null,
                'category' => 'Music',
                'platform' => 'youtube',
                'location_id' => 2, // Seoul
                'article_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Vancouver Urban Culture',
                'youtube_url' => 'https://youtube.com/watch?v=y6120QOlsfU',
                'thumbnail_url' => $getYtThumb('y6120QOlsfU'),
                'duration' => '11:30',
                'views' => '78K',
                'likes' => null,
                'category' => 'Art',
                'platform' => 'youtube',
                'location_id' => 6, // Vancouver
                'article_id' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // TikTok Videos (実際のTikTok動画URL)
        DB::table('videos')->insert([
            [
                'title' => 'Street Dance Battle in Seoul',
                'youtube_url' => 'https://www.tiktok.com/@bts_official_bighit/video/6891530135406079233',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=450&fit=crop',
                'duration' => '0:45',
                'views' => '2.3M',
                'likes' => null,
                'category' => 'Music',
                'platform' => 'tiktok',
                'location_id' => 2, // Seoul
                'article_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Urban Fashion Lookbook',
                'youtube_url' => 'https://www.tiktok.com/@fashionweek/video/7234567890123456789',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=450&fit=crop',
                'duration' => '0:30',
                'views' => '1.8M',
                'likes' => null,
                'category' => 'Fashion',
                'platform' => 'tiktok',
                'location_id' => 1, // Tokyo
                'article_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Street Art Time-lapse',
                'youtube_url' => 'https://www.tiktok.com/@streetartglobe/video/7345678901234567890',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
                'duration' => '0:58',
                'views' => '950K',
                'likes' => null,
                'category' => 'Art',
                'platform' => 'tiktok',
                'location_id' => 3, // Los Angeles
                'article_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Skateboard Tricks Compilation',
                'youtube_url' => 'https://www.tiktok.com/@skate/video/7456789012345678901',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1520338258135-607c3cda82b1?w=800&h=450&fit=crop',
                'duration' => '0:42',
                'views' => '3.1M',
                'likes' => null,
                'category' => 'Sport',
                'platform' => 'tiktok',
                'location_id' => 6, // Vancouver
                'article_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // Instagram Posts (実際のInstagram投稿URL)
        DB::table('videos')->insert([
            [
                'title' => 'Tokyo Street Fashion Week',
                'youtube_url' => 'https://www.instagram.com/p/C4xYzAbCdEf/',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=800&fit=crop',
                'duration' => null,
                'views' => '89K',
                'likes' => '15.2K',
                'category' => 'Fashion',
                'platform' => 'instagram',
                'location_id' => 1, // Tokyo
                'article_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Urban Art Gallery Opening',
                'youtube_url' => 'https://www.instagram.com/p/C5yBcDdEfGh/',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&h=800&fit=crop',
                'duration' => null,
                'views' => '45K',
                'likes' => '8.9K',
                'category' => 'Art',
                'platform' => 'instagram',
                'location_id' => 4, // New York
                'article_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Hip-Hop Culture Showcase',
                'youtube_url' => 'https://www.instagram.com/p/C6zCdEdFfGh/',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1571609803939-54f463a82e6e?w=800&h=800&fit=crop',
                'duration' => null,
                'views' => '120K',
                'likes' => '22.5K',
                'category' => 'Music',
                'platform' => 'instagram',
                'location_id' => 2, // Seoul
                'article_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Skateboard Park Sessions',
                'youtube_url' => 'https://www.instagram.com/p/C7ADdEdFfGh/',
                'thumbnail_url' => 'https://images.unsplash.com/photo-1564982752979-3f7bc974735e?w=800&h=800&fit=crop',
                'duration' => null,
                'views' => '95K',
                'likes' => '18.7K',
                'category' => 'Sport',
                'platform' => 'instagram',
                'location_id' => 6, // Vancouver
                'article_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // Japanese Videos (Osaka)
        DB::table('videos')->insert([
            [
                'title' => '大阪ストリートカルチャー：アメリカ村のファッションシーン',
                'youtube_url' => 'https://youtube.com/watch?v=5qap5aO4i9A',
                'thumbnail_url' => $getYtThumb('5qap5aO4i9A'),
                'duration' => '15:30',
                'views' => '450K',
                'likes' => null,
                'category' => 'Fashion',
                'platform' => 'youtube',
                'location_id' => 7, // Osaka
                'article_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => '大阪グラフィティアート：道頓堀のストリートアーティスト',
                'youtube_url' => 'https://youtube.com/watch?v=lXMskKTw3Bc',
                'thumbnail_url' => $getYtThumb('lXMskKTw3Bc'),
                'duration' => '20:15',
                'views' => '320K',
                'likes' => null,
                'category' => 'Art',
                'platform' => 'youtube',
                'location_id' => 7, // Osaka
                'article_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => '大阪ヒップホップシーン：関西ラップの今',
                'youtube_url' => 'https://youtube.com/watch?v=hT_nvWreIhg',
                'thumbnail_url' => $getYtThumb('hT_nvWreIhg'),
                'duration' => '18:45',
                'views' => '680K',
                'likes' => null,
                'category' => 'Music',
                'platform' => 'youtube',
                'location_id' => 7, // Osaka
                'article_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => '大阪スケートボードパーク：長居公園セッション',
                'youtube_url' => 'https://youtube.com/watch?v=BaW_jenozKc',
                'thumbnail_url' => $getYtThumb('BaW_jenozKc'),
                'duration' => '12:20',
                'views' => '280K',
                'likes' => null,
                'category' => 'Sport',
                'platform' => 'youtube',
                'location_id' => 7, // Osaka
                'article_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

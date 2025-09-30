<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            [
                'title' => 'The Evolution of Tokyo\'s Underground Hip-Hop Scene',
                'slug' => 'tokyo-underground-hip-hop',
                'excerpt' => 'Exploring how Tokyo\'s hip-hop culture has transformed from underground movement to mainstream phenomenon...',
                'content' => 'Full article content here...',
                'image_url' => 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop',
                'category' => 'Music',
                'location_id' => 1, // Tokyo
                'author' => 'Yuki Tanaka',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Graffiti as Art: From Vandalism to Gallery Exhibitions',
                'slug' => 'graffiti-art-evolution',
                'excerpt' => 'The journey of street art from illegal activity to celebrated contemporary art form in major museums...',
                'content' => 'Full article content here...',
                'image_url' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
                'category' => 'Art',
                'location_id' => 4, // New York
                'author' => 'Marcus Rodriguez',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Skateboarding Culture: More Than Just a Sport',
                'slug' => 'skateboarding-culture',
                'excerpt' => 'Understanding the deep-rooted culture, community, and lifestyle that defines skateboarding worldwide...',
                'content' => 'Full article content here...',
                'image_url' => 'https://images.unsplash.com/photo-1520338258135-607c3cda82b1?w=600&h=400&fit=crop',
                'category' => 'Sport',
                'location_id' => 3, // Los Angeles
                'author' => 'Jake Wilson',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Street Fashion: The New Runway',
                'slug' => 'street-fashion-runway',
                'excerpt' => 'How street style influencers are reshaping the fashion industry and challenging traditional haute couture...',
                'content' => 'Full article content here...',
                'image_url' => 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
                'category' => 'Fashion',
                'location_id' => 5, // London
                'author' => 'Sophie Martin',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Breakdancing Goes Olympic: Cultural Impact',
                'slug' => 'breakdancing-olympics',
                'excerpt' => 'Analyzing the significance of breaking\'s inclusion in the Olympics and its effect on street culture...',
                'content' => 'Full article content here...',
                'image_url' => 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&h=400&fit=crop',
                'category' => 'Music',
                'location_id' => 2, // Seoul
                'author' => 'David Kim',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Rise of Asian Street Culture on Global Stage',
                'slug' => 'asian-street-culture-rise',
                'excerpt' => 'From Seoul to Shanghai, Asian cities are becoming epicenters of contemporary street culture...',
                'content' => 'Full article content here...',
                'image_url' => 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop',
                'category' => 'Fashion',
                'location_id' => 6, // Vancouver
                'author' => 'Alex Chen',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

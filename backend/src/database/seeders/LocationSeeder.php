<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('locations')->insert([
            [
                'name' => 'Tokyo',
                'slug' => 'tokyo',
                'banner_image_url' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Seoul',
                'slug' => 'seoul',
                'banner_image_url' => 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Los Angeles',
                'slug' => 'los-angeles',
                'banner_image_url' => 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'New York',
                'slug' => 'new-york',
                'banner_image_url' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'London',
                'slug' => 'london',
                'banner_image_url' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Vancouver',
                'slug' => 'vancouver',
                'banner_image_url' => 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Osaka',
                'slug' => 'osaka',
                'banner_image_url' => 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&h=400&fit=crop',
                'color' => 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

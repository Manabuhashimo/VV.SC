<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'name' => 'Fashion',
                'slug' => 'fashion',
                'icon' => '👕',
                'color' => 'linear-gradient(to bottom right, #eab308, #f97316)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Music',
                'slug' => 'music',
                'icon' => '🎵',
                'color' => 'linear-gradient(to bottom right, #a855f7, #ec4899)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Art',
                'slug' => 'art',
                'icon' => '🎨',
                'color' => 'linear-gradient(to bottom right, #f97316, #ef4444)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sport',
                'slug' => 'sport',
                'icon' => '⚽',
                'color' => 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

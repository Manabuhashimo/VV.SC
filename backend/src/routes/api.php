<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Health Check
Route::get('/', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'VV.SC Laravel API is running',
        'version' => '1.0.0'
    ]);
});

// Locations
Route::get('/locations', function () {
    return response()->json(DB::table('locations')->get());
});

// Categories
Route::get('/categories', function () {
    return response()->json(DB::table('categories')->get());
});

// Videos
Route::get('/videos', function (Request $request) {
    $query = DB::table('videos');

    if ($request->has('platform')) {
        $query->where('platform', $request->platform);
    }

    if ($request->has('category')) {
        $query->where('category', $request->category);
    }

    if ($request->has('location_id')) {
        $query->where('location_id', $request->location_id);
    }

    return response()->json($query->get());
});

// Articles
Route::get('/articles', function (Request $request) {
    $query = DB::table('articles');

    if ($request->has('category')) {
        $query->where('category', $request->category);
    }

    if ($request->has('location_id')) {
        $query->where('location_id', $request->location_id);
    }

    return response()->json($query->get());
});

// Location by slug
Route::get('/locations/{slug}', function ($slug) {
    $location = DB::table('locations')->where('slug', $slug)->first();
    if (!$location) {
        return response()->json(['message' => 'Location not found'], 404);
    }
    return response()->json($location);
});

// Videos by location slug
Route::get('/locations/{slug}/videos', function ($slug) {
    $location = DB::table('locations')->where('slug', $slug)->first();
    if (!$location) {
        return response()->json(['message' => 'Location not found'], 404);
    }
    $videos = DB::table('videos')->where('location_id', $location->id)->get();
    return response()->json($videos);
});

// Articles by location slug
Route::get('/locations/{slug}/articles', function ($slug) {
    $location = DB::table('locations')->where('slug', $slug)->first();
    if (!$location) {
        return response()->json(['message' => 'Location not found'], 404);
    }
    $articles = DB::table('articles')->where('location_id', $location->id)->get();
    return response()->json($articles);
});

<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// データベース接続
try {
    $pdo = new PDO(
        'mysql:host=mysql;dbname=' . getenv('DB_DATABASE'),
        getenv('DB_USERNAME'),
        getenv('DB_PASSWORD'),
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit();
}

// ルーティング
$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// /api/videos - ビデオ一覧取得
if (preg_match('#^/api/videos$#', $request_uri) && $request_method === 'GET') {
    try {
        $stmt = $pdo->query('SELECT * FROM videos ORDER BY created_at DESC');
        $videos = $stmt->fetchAll();
        echo json_encode($videos);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
    exit();
}

// /api/articles - 記事一覧取得
if (preg_match('#^/api/articles$#', $request_uri) && $request_method === 'GET') {
    try {
        $stmt = $pdo->query('SELECT * FROM articles ORDER BY published_at DESC');
        $articles = $stmt->fetchAll();
        echo json_encode($articles);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
    exit();
}

// /api/categories - カテゴリ一覧取得
if (preg_match('#^/api/categories$#', $request_uri) && $request_method === 'GET') {
    try {
        $stmt = $pdo->query('SELECT * FROM categories ORDER BY id');
        $categories = $stmt->fetchAll();
        echo json_encode($categories);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
    exit();
}

// 404 Not Found
http_response_code(404);
echo json_encode([
    'error' => 'Endpoint not found',
    'uri' => $request_uri
]);

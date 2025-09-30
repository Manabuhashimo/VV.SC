# Laravel Migration Complete ✅

## 概要

VV.SCのバックエンドをシンプルなPHP APIからLaravel 11に移行しました。

## 変更内容

### 1. Laravel 11のインストール
- `backend/src/`にLaravel 11プロジェクトを作成
- Composer依存関係のインストール

### 2. データベース設定
- `.env`ファイルでMySQL接続を設定
  - `DB_HOST=mysql`
  - `DB_DATABASE=vvsc_db`
  - `DB_USERNAME=vvsc_user`
  - `DB_PASSWORD=vvsc_password`

### 3. マイグレーション作成
以下のテーブルをマイグレーションで管理:
- `locations` - 地名データ (Tokyo, Seoul, Los Angeles, New York, London, Vancouver)
- `videos` - 動画データ (YouTube, TikTok, Instagram)
- `articles` - 記事データ
- `categories` - カテゴリーデータ (Fashion, Music, Art, Sport)

### 4. Seeder作成
サンプルデータの投入:
- `LocationSeeder` - 6つの地名データ
- `CategorySeeder` - 4つのカテゴリーデータ

### 5. API Routes
`routes/api.php`にRESTful APIを作成:
- `GET /api/` - ヘルスチェック
- `GET /api/locations` - 地名一覧
- `GET /api/categories` - カテゴリー一覧
- `GET /api/videos` - 動画一覧 (クエリパラメータでフィルタリング可能)
- `GET /api/articles` - 記事一覧 (クエリパラメータでフィルタリング可能)

## データベース管理

### マイグレーションの実行
```bash
docker-compose exec backend php artisan migrate
```

### マイグレーションのロールバック
```bash
docker-compose exec backend php artisan migrate:rollback
```

### マイグレーションのリフレッシュ（全データ削除）
```bash
docker-compose exec backend php artisan migrate:fresh
```

### Seederの実行
```bash
docker-compose exec backend php artisan db:seed
```

### マイグレーション + Seeder
```bash
docker-compose exec backend php artisan migrate:fresh --seed
```

## 新しいマイグレーションの作成

```bash
docker-compose exec backend php artisan make:migration create_new_table_name
```

## 新しいSeederの作成

```bash
docker-compose exec backend php artisan make:seeder NewSeeder
```

## APIエンドポイント

### ベースURL
```
http://localhost:8080/api
```

### 例
```bash
# ヘルスチェック
curl http://localhost:8080/api/

# 地名一覧
curl http://localhost:8080/api/locations

# カテゴリー一覧
curl http://localhost:8080/api/categories

# 動画一覧
curl http://localhost:8080/api/videos

# カテゴリーでフィルタリング
curl "http://localhost:8080/api/videos?category=Music"

# ロケーションでフィルタリング
curl "http://localhost:8080/api/videos?location_id=1"
```

## 今後の開発

### Eloquent Modelの作成
より洗練されたデータアクセスのため、Eloquent Modelを作成することをお勧めします:

```bash
docker-compose exec backend php artisan make:model Location
docker-compose exec backend php artisan make:model Video
docker-compose exec backend php artisan make:model Article
docker-compose exec backend php artisan make:model Category
```

### API Resource / Controllerの作成
よりRESTfulなAPI設計のため:

```bash
docker-compose exec backend php artisan make:controller Api/LocationController --api
docker-compose exec backend php artisan make:resource LocationResource
```

## トラブルシューティング

### パーミッションエラー
```bash
docker-compose exec backend chmod -R 775 storage bootstrap/cache
docker-compose exec backend chown -R www-data:www-data storage bootstrap/cache
```

### データベース接続エラー
```bash
# .envファイルを確認
cat backend/src/.env | grep DB_

# マイグレーションをリセット
docker-compose exec backend php artisan migrate:fresh --seed
```

### Composerの依存関係エラー
```bash
docker-compose exec backend composer install
docker-compose exec backend composer dump-autoload
```

## 注意事項

⚠️ **`mysql/init.sql`は今後使用しません**
- データベースの初期化はLaravelのマイグレーションとSeederで行います
- `init.sql`は`init.sql.backup`にリネームされています

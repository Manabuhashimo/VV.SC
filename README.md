# VV.SC - Video & Article Platform

Docker Composeを使用したPHP（バックエンド）+ Vite + React（フロントエンド）+ MySQLのフルスタック開発環境です。

## 📁 プロジェクト構成

```
vvsc-project/
├── docker-compose.yml      # Docker Compose設定
├── .env                     # 環境変数
├── backend/                 # PHPバックエンド
│   ├── Dockerfile
│   ├── nginx.conf          # Nginx設定
│   └── src/
│       └── public/
│           ├── index.php   # メインエンドポイント
│           └── api.php     # APIエンドポイント
├── frontend/                # React (Vite) フロントエンド
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx        # エントリーポイント
│       ├── App.jsx         # メインコンポーネント
│       ├── App.css
│       └── index.css
└── mysql/
    └── init.sql            # DB初期化スクリプト
```

## 🚀 セットアップ手順

### 1. リポジトリをクローン

```bash
cd /Users/hashimotomanabu/Documents/Development/VV.SC
```

### 2. 環境変数ファイルの作成

`.env` ファイルを作成（まだ存在しない場合）:

```env
# Database Configuration
DB_ROOT_PASSWORD=rootpassword
DB_DATABASE=vvsc_db
DB_USERNAME=vvsc_user
DB_PASSWORD=vvsc_password
DB_PORT=3306

# Application Configuration
APP_ENV=development
APP_DEBUG=true
```

### 3. Docker環境の起動

```bash
# コンテナをビルド＆起動
docker-compose up -d --build

# ログ確認
docker-compose logs -f
```

### 4. アクセス確認

- **フロントエンド**: http://localhost:3000
- **バックエンドAPI**: http://localhost:8080
- **phpMyAdmin**: http://localhost:8081
- **MySQL**: localhost:3306

初回起動時、以下のデータが自動で作成されます：
- カテゴリ: Fashion, Music, Art, Sport
- サンプル動画: 1件
- サンプル記事: 1件

## 🛠️ 開発コマンド

### Docker操作

```bash
# コンテナ起動
docker-compose up -d

# コンテナ停止
docker-compose down

# コンテナ再ビルド
docker-compose up -d --build

# ログ確認
docker-compose logs -f [service-name]

# 特定のコンテナに入る
docker exec -it vvsc-frontend sh
docker exec -it vvsc-backend bash
docker exec -it vvsc-mysql bash
```

### フロントエンド（React）

```bash
# コンテナに入る
docker exec -it vvsc-frontend sh

# パッケージ追加
npm install [package-name]

# ビルド
npm run build

# プレビュー
npm run preview
```

### バックエンド（PHP）

```bash
# コンテナに入る
docker exec -it vvsc-backend bash

# Composerパッケージインストール
composer install [package-name]
```

### MySQL

```bash
# MySQLに接続
docker exec -it vvsc-mysql mysql -u vvsc_user -p vvsc_db
# パスワード: vvsc_password

# データベースバックアップ
docker exec vvsc-mysql mysqldump -u vvsc_user -p vvsc_db > backup.sql

# データベースリストア
docker exec -i vvsc-mysql mysql -u vvsc_user -p vvsc_db < backup.sql
```

## 📡 APIエンドポイント

### ヘルスチェック
```
GET http://localhost:8080/
```

### ビデオ関連
```
GET http://localhost:8080/api/videos
```
レスポンス例:
```json
[
  {
    "id": 1,
    "title": "Tokyo Underground: Hip-Hop Scene 2025",
    "youtube_url": "https://youtube.com/watch?v=sample",
    "thumbnail_url": "https://images.unsplash.com/...",
    "duration": "12:45",
    "views": "125K",
    "category": "Music",
    "article_id": 1,
    "created_at": "2025-09-30 10:00:00",
    "updated_at": "2025-09-30 10:00:00"
  }
]
```

### 記事関連
```
GET http://localhost:8080/api/articles
```

### カテゴリ関連
```
GET http://localhost:8080/api/categories
```

## 🎨 使用技術

- **フロントエンド**: 
  - React 18.2
  - Vite 5.0
  - Axios (HTTP Client)
  - Lucide React (Icons)
  - React Router DOM

- **バックエンド**: 
  - PHP 8.2
  - Nginx
  - PDO (MySQL)

- **データベース**: 
  - MySQL 8.0

- **開発ツール**:
  - Docker & Docker Compose
  - phpMyAdmin

## 🔧 トラブルシューティング

### ポートが使用中の場合

`.env` ファイルでポート番号を変更:
```env
DB_PORT=3307
```

`docker-compose.yml` でフロントエンド/バックエンドポートを変更:
```yaml
ports:
  - "3001:3000"  # フロントエンド
  - "8082:80"    # バックエンド
```

### パーミッションエラー

```bash
sudo chown -R $USER:$USER ./backend/src
chmod -R 755 ./backend/src
```

### データベース接続エラー

```bash
# MySQLコンテナの状態確認
docker-compose ps mysql

# MySQLログ確認
docker-compose logs mysql

# コンテナ再起動
docker-compose restart mysql backend
```

### Viteのホットリロードが効かない場合

`vite.config.js` に以下が設定されているか確認:
```javascript
server: {
  watch: {
    usePolling: true
  }
}
```

### データベースのリセット

```bash
# すべてのボリュームを削除して再起動
docker-compose down -v
docker-compose up -d
```

## 🧹 クリーンアップ

### コンテナとボリュームを削除

```bash
docker-compose down -v
```

### イメージも含めて完全削除

```bash
docker-compose down -v --rmi all
```

## 📦 本番環境デプロイ（参考）

### 推奨構成

- **フロントエンド**: AWS S3 + CloudFront / Vercel / Netlify
- **バックエンド**: AWS ECS / EC2 / Elastic Beanstalk
- **データベース**: AWS RDS (MySQL)
- **ストレージ**: AWS S3 (画像・動画)

### フロントエンドビルド

```bash
cd frontend
npm run build
# dist/フォルダをデプロイ
```

### バックエンドデプロイ

```bash
# Dockerイメージをビルド
docker build -t vvsc-backend:latest ./backend

# ECRにプッシュ（AWS）
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT.dkr.ecr.ap-northeast-1.amazonaws.com
docker tag vvsc-backend:latest YOUR_ACCOUNT.dkr.ecr.ap-northeast-1.amazonaws.com/vvsc-backend:latest
docker push YOUR_ACCOUNT.dkr.ecr.ap-northeast-1.amazonaws.com/vvsc-backend:latest
```

## 📝 ライセンス

MIT License

## 🤝 貢献

プルリクエスト大歓迎です！

---

**VV.SC** - Video & Article Platform 🎬📰
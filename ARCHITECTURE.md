# VV.SC アーキテクチャドキュメント

## 📐 全体構成

VV.SCはモノリポ構成で、フロントエンド（React）、バックエンド（PHP）、データベース（MySQL）の3層アーキテクチャです。

```
┌─────────────────────────────────────────────────────────────┐
│                         VV.SC                                │
│                  (モノリポ構成)                              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │  Frontend   │───▶│  Backend    │───▶│  Database   │    │
│  │  (React)    │    │  (PHP)      │    │  (MySQL)    │    │
│  │  Port: 3000 │    │  Port: 8080 │    │  Port: 3306 │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            phpMyAdmin (Port: 8081)                  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ フロントエンド構成（MVCパターン）

### ディレクトリ構造

```
frontend/src/
├── models/              ← MODEL: データ層
│   └── data.js         # データ定義・モックデータ
│
├── services/            ← CONTROLLER: ビジネスロジック層
│   └── api.js          # API通信・データ処理
│
├── components/          ← VIEW: プレゼンテーション層（再利用可能）
│   ├── Header.jsx      # ヘッダーコンポーネント
│   ├── Footer.jsx      # フッターコンポーネント
│   ├── VideoCard.jsx   # ビデオカードコンポーネント
│   ├── ArticleCard.jsx # 記事カードコンポーネント
│   └── CategoryCard.jsx # カテゴリカードコンポーネント
│
├── pages/               ← VIEW: ページ層（ルートレベル）
│   └── Home.jsx        # ホームページ
│
├── styles/              ← スタイル層
│   ├── global.css      # グローバルスタイル
│   └── components.css  # コンポーネント専用スタイル
│
├── App.jsx              # アプリケーションルート
├── main.jsx             # エントリーポイント
└── index.css            # ベーススタイル
```

### データフロー

```
┌─────────────────────────────────────────────────────────────┐
│                      User Interaction                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    VIEW (Components/Pages)                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Header  │  │VideoCard │  │ArticleCard│ │ Category │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              CONTROLLER (Services)                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  api.js                                              │   │
│  │  - getVideos()                                       │   │
│  │  - getArticles()                                     │   │
│  │  - getCategories()                                   │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   MODEL (Data)                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  data.js                                             │   │
│  │  - categories (カテゴリデータ)                      │   │
│  │  - videosData (ビデオデータ)                        │   │
│  │  - articlesData (記事データ)                        │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Backend API (PHP)                               │
│  GET /api/videos                                             │
│  GET /api/articles                                           │
│  GET /api/categories                                         │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 バックエンド構成

```
backend/
├── Dockerfile           # Dockerイメージ設定
├── nginx.conf          # Nginx設定（ルーティング）
└── src/
    └── public/
        ├── index.php   # メインエンドポイント
        └── api.php     # APIエンドポイント
```

### APIエンドポイント

| エンドポイント | メソッド | 説明 |
|----------------|----------|------|
| `/` | GET | ヘルスチェック |
| `/api/videos` | GET | ビデオ一覧取得 |
| `/api/articles` | GET | 記事一覧取得 |
| `/api/categories` | GET | カテゴリ一覧取得 |

## 🗄️ データベース構成

```sql
-- Videos テーブル
videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  youtube_url VARCHAR(255),
  thumbnail_url VARCHAR(255),
  duration VARCHAR(10),
  views VARCHAR(20),
  category VARCHAR(50),
  article_id INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Articles テーブル
articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  excerpt TEXT,
  content TEXT,
  image_url VARCHAR(255),
  category VARCHAR(50),
  author VARCHAR(100),
  published_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Categories テーブル
categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) UNIQUE,
  slug VARCHAR(50) UNIQUE,
  icon VARCHAR(10),
  color VARCHAR(100),
  created_at TIMESTAMP
)
```

## 🐳 Docker構成

### サービス一覧

1. **mysql** - データベース
2. **backend** - PHPアプリケーション + Nginx
3. **frontend** - React (Vite) 開発サーバー
4. **phpmyadmin** - データベース管理GUI

### ネットワーク

すべてのサービスは `vvsc-network` ブリッジネットワークで接続されています。

```
┌─────────────────────────────────────────────────────────────┐
│                     vvsc-network                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  MySQL   │  │ Backend  │  │ Frontend │  │phpMyAdmin│   │
│  │  :3306   │  │  :8080   │  │  :3000   │  │  :8081   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 📊 コンポーネント責務

### Model (models/data.js)
- **責務**: データの定義と管理
- **役割**: 
  - データ構造の定義
  - モックデータの提供
  - データのバリデーション（将来的に）

### Controller (services/api.js)
- **責務**: ビジネスロジックとAPI通信
- **役割**:
  - バックエンドAPIとの通信
  - データの変換・加工
  - エラーハンドリング
  - ローディング状態の管理

### View (components/ + pages/)
- **責務**: UIの表示とユーザーインタラクション
- **役割**:
  - データの表示
  - ユーザー入力の受付
  - イベントハンドリング
  - スタイリング

## 🔄 状態管理

現在は各コンポーネント内でのローカル状態管理（useState）を使用。

### 将来的な拡張

規模が大きくなった場合：
- **React Context** - グローバル状態管理
- **React Query** - サーバー状態管理
- **Zustand/Redux** - 複雑な状態管理

## 🚀 デプロイ構成（推奨）

### 開発環境
```
Docker Compose (ローカル)
```

### 本番環境
```
Frontend: Vercel / Netlify / AWS S3 + CloudFront
Backend:  AWS ECS / EC2 / Heroku
Database: AWS RDS MySQL
Storage:  AWS S3 (画像・動画)
```

## 🔒 セキュリティ考慮事項

1. **CORS設定** - バックエンドで適切なCORS設定
2. **環境変数** - 機密情報は環境変数で管理
3. **SQL Injection対策** - PDOプリペアドステートメント使用
4. **XSS対策** - Reactのデフォルト機能で保護

## 📈 パフォーマンス最適化

1. **コード分割** - React.lazy + Suspense
2. **画像最適化** - 遅延ロード、WebP形式
3. **キャッシング** - React Query、Service Worker
4. **CDN** - 静的アセットの配信

---

このアーキテクチャは拡張性と保守性を重視しています。

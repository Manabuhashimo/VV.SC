# VV.SC Frontend

Vite + React ベースのフロントエンドアプリケーション

## 📁 プロジェクト構造（MVCアーキテクチャ）

```
src/
├── models/              # Model: データ定義
│   └── data.js         # カテゴリ、ビデオ、記事のデータ
│
├── services/            # Controller: ビジネスロジック
│   └── api.js          # API通信サービス
│
├── components/          # View: 再利用可能なUIコンポーネント
│   ├── Header.jsx      # ヘッダー
│   ├── Footer.jsx      # フッター
│   ├── VideoCard.jsx   # ビデオカード
│   ├── ArticleCard.jsx # 記事カード
│   └── CategoryCard.jsx # カテゴリカード
│
├── pages/               # View: ページコンポーネント
│   └── Home.jsx        # ホームページ
│
├── styles/              # スタイル
│   ├── global.css      # グローバルスタイル
│   └── components.css  # コンポーネント用スタイル
│
├── App.jsx              # アプリケーションルート
├── main.jsx             # エントリーポイント
└── index.css            # ベーススタイル
```

## 🏗️ アーキテクチャ説明

### Model (models/)
- データ構造の定義
- モックデータの管理
- データのバリデーション

### Controller (services/)
- API通信のロジック
- ビジネスロジックの処理
- データの変換・加工

### View (components/ + pages/)
- UIコンポーネント
- ユーザーインタラクション
- データの表示

## 🚀 開発

### 開発サーバー起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

## 📦 使用ライブラリ

- **React** - UIライブラリ
- **Vite** - ビルドツール
- **Axios** - HTTP クライアント
- **Lucide React** - アイコン

## 🎨 コンポーネント使用例

### VideoCard
```jsx
import VideoCard from './components/VideoCard';

<VideoCard 
  video={videoData} 
  onPlay={(id) => console.log('Playing:', id)}
/>
```

### ArticleCard
```jsx
import ArticleCard from './components/ArticleCard';

<ArticleCard article={articleData} />
```

### CategoryCard
```jsx
import CategoryCard from './components/CategoryCard';

<CategoryCard category={categoryData} />
```

## 🔌 API統合

```jsx
import api from './services/api';

// ビデオ取得
const videos = await api.getVideos();

// 記事取得
const articles = await api.getArticles();

// カテゴリ取得
const categories = await api.getCategories();
```

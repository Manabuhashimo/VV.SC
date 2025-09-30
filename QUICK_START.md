# 🚀 クイックスタートガイド

VV.SCプロジェクトを最速で起動する方法です。

## 📋 前提条件

以下がインストールされていることを確認してください：

- Docker Desktop
- Git (optional)

## ⚡ 3ステップで起動

### 1️⃣ セットアップスクリプトを実行

```bash
chmod +x setup.sh
./setup.sh
```

### 2️⃣ ブラウザでアクセス

- フロントエンド: http://localhost:3000
- バックエンドAPI: http://localhost:8080
- phpMyAdmin: http://localhost:8081

### 3️⃣ 完了！ 🎉

これだけでVV.SCが起動します。

---

## 🛑 停止方法

```bash
docker-compose down
```

## 🔄 再起動方法

```bash
docker-compose up -d
```

## 🗑️ 完全リセット

```bash
docker-compose down -v
./setup.sh
```

---

## 📖 詳細情報

詳しい使い方は `README.md` を参照してください。

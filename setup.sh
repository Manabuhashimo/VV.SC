#!/bin/bash

echo "🚀 VV.SC セットアップを開始します..."
echo ""

# .envファイルのチェック
if [ ! -f .env ]; then
    echo "📝 .envファイルを作成しています..."
    cat > .env << 'EOL'
# Database Configuration
DB_ROOT_PASSWORD=rootpassword
DB_DATABASE=vvsc_db
DB_USERNAME=vvsc_user
DB_PASSWORD=vvsc_password
DB_PORT=3306

# Application Configuration
APP_ENV=development
APP_DEBUG=true
EOL
    echo "✅ .envファイルを作成しました"
else
    echo "✅ .envファイルが既に存在します"
fi

echo ""
echo "🐳 Dockerコンテナをビルド・起動しています..."
echo "   (初回は数分かかる場合があります)"
echo ""

docker-compose up -d --build

echo ""
echo "⏳ コンテナの起動を待っています..."
sleep 15

echo ""
echo "📋 コンテナの状態を確認中..."
docker-compose ps

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ セットアップが完了しました！"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 アクセス先:"
echo "   📱 フロントエンド:  http://localhost:3000"
echo "   🔧 バックエンドAPI: http://localhost:8080"
echo "   💾 phpMyAdmin:      http://localhost:8081"
echo "   🗄️  MySQL:           localhost:3306"
echo ""
echo "📚 データベース接続情報:"
echo "   Database: vvsc_db"
echo "   Username: vvsc_user"
echo "   Password: vvsc_password"
echo ""
echo "💡 便利なコマンド:"
echo "   ログを確認:     docker-compose logs -f"
echo "   コンテナ停止:   docker-compose down"
echo "   コンテナ再起動: docker-compose restart"
echo ""
echo "📖 詳細はREADME.mdを参照してください"
echo ""
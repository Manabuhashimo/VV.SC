import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

// APIクライアント
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// API サービス
export const api = {
    // ヘルスチェック
    async checkHealth() {
        try {
            const response = await apiClient.get('/');
            return response.data;
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    },

    // ビデオ一覧取得
    async getVideos() {
        try {
            const response = await apiClient.get('/api/videos');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch videos:', error);
            throw error;
        }
    },

    // 記事一覧取得
    async getArticles() {
        try {
            const response = await apiClient.get('/api/articles');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch articles:', error);
            throw error;
        }
    },

    // カテゴリ一覧取得
    async getCategories() {
        try {
            const response = await apiClient.get('/api/categories');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch categories:', error);
            throw error;
        }
    },
};

export default api;

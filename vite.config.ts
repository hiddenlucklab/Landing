import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        // [1] Netlify 빈 페이지 해결을 위한 base 설정 (쉼표 포함)
        base: './',

        // [2] server 속성
        server: {
            port: 3000,
            host: '0.0.0.0',
        },

        // [3] plugins 속성
        plugins: [react()],

        // [4] define 속성
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },

        // [5] resolve 속성
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});

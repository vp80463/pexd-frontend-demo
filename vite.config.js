import { defineConfig } from '@ymc-group/vite-config';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/a1stream': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/a1stream/websocket': {
        target: 'ws://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },
});

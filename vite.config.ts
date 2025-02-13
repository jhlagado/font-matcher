import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/your-repo-name/', // Update with your repo name
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false,
      },
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Vue Vite TS App',
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

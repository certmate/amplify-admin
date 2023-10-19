import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CertMate',
        short_name: 'certmate',
        theme_color: '#4735df',
        icons: [
          {
            src: 'src/assets/images/logo/logo.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          // Add more icons as needed
        ],
      },
    }),
  ],
  optimizeDeps: {
    entries: 'index.html'
  },
  // https://github.com/aws-amplify/amplify-js/issues/9639 - Cannot use amplify-js in browser environment (breaking vite / snowpack / esbuild)
  resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } }
})

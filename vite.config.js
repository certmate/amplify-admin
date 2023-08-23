import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  plugins: [react()],
  // https://github.com/aws-amplify/amplify-js/issues/9639 - Cannot use amplify-js in browser environment (breaking vite / snowpack / esbuild)
  resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } }
})

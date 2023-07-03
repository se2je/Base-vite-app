import {defineConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@UI': path.resolve(__dirname, './src/components/UI/'),
      '@scss': path.resolve(__dirname, './src/styles/'),
      '@data' : path.resolve(__dirname, './src/data/'),
      '@hooks' : path.resolve(__dirname, './src/hooks/'),
      '@store' : path.resolve(__dirname, './src/store/')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@scss/vars.scss";',
      },
    },
  },
  build: {
    outDir: './dist',
    assetsDir: './dist/assets',
    sourcemap: true
  }
})
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Markdown from 'vite-plugin-md'



export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // ✅ Needed for Netlify
  },
  server: {
    port: 3000,
    open: true,
  },
})

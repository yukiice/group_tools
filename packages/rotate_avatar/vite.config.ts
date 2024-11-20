import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port: 3000,
    host:true
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //開發中、產品路徑
  base: process.env.Node_ENV === 'production'? '/react-practice/' : '/',
  plugins: [react()],
  server: {
    proxy: {
      // 當你請求 /api 時，Vite 會幫你轉發到真正的目標伺服器
      '/api': {
        target: 'https://randomuser.me',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 將 /api 去掉再轉發
      }
    }
  }
})

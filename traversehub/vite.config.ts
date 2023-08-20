import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@utils': "src/utils",
      '@context': 'src/context',
      '@hooks': 'src/hooks',
      '@components': 'src/components',
      '@pages': 'src/pages',
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
        '@component': path.resolve(__dirname, 'src/component'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@reducer-contant': path.resolve(__dirname, 'src/redux/reducers/Constants'),
      }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'           // electron

// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, './dist/'), // electron
  // base: '/bip39transform/',
  plugins: [vue()]
})

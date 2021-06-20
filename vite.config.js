import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue(),ViteAliases()],
}

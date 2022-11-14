import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import relay from "vite-plugin-relay"
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['relay']
    }
  })]
})

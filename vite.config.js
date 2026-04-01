import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trackway/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})

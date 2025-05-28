import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Nom de votre repo GitHub
  build: {
    outDir: 'dist'
  }
})

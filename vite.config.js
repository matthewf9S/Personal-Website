import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use the repo name as base so production assets resolve correctly on GitHub Pages
  // Replace `Personal-Website` with your repo name if different
  base: '/Personal-Website/',
})

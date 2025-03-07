import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tewodros-yirga-portfolio/', // Set the base path for GitHub Pages
});
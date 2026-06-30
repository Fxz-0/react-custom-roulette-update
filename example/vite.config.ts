import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-custom-roulette': resolve(__dirname, '../src/index.tsx'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

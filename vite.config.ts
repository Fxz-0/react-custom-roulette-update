import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ReactCustomRoulette',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'umd'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'webfontloader'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          webfontloader: 'WebFont',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
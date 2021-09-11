import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  root: 'src',
  build: {
    target: 'esnext',
    outDir: '../dist',
    sourcemap: true,
  },
})

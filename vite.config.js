import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));

const pageEntries = [
  'index.html',
  'projects/index.html',
  'work/cami-school-portal/index.html',
  'work/healthbubba/index.html',
  'work/jobberlad/index.html',
  'work/lodgedeck/index.html',
  'work/onlysocial/index.html',
  'work/xtravalue/index.html',
  '404.html'
];

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    assetsDir: 'build',
    rollupOptions: {
      input: Object.fromEntries(
        pageEntries.map((page) => [page.replaceAll('/', '-').replace('.html', ''), resolve(rootDir, page)])
      )
    }
  }
});

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, 'src/index.ts'),
        'subscriptions/index': resolve(import.meta.dirname, 'src/subscriptions/index.ts'),
        'tenancy/index': resolve(import.meta.dirname, 'src/tenancy/index.ts'),
        'healthcare/index': resolve(import.meta.dirname, 'src/healthcare/index.ts'),
        'wage/index': resolve(import.meta.dirname, 'src/wage/index.ts'),
        'warranties/index': resolve(import.meta.dirname, 'src/warranties/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
    sourcemap: true,
  },
});

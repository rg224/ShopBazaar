import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ReduxBridge',
      formats: ['es', 'cjs'],
      fileName: (fmt) => (fmt === 'es' ? 'index.js' : 'index.cjs'),
    },
    sourcemap: true,
    minify: false,
    emptyOutDir: true,
  },
});

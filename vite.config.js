import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/my-lib/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: 'my-lib/my-lib',
    },
    minify: true,
  },
  plugins:[
    dts(),
  ]
});
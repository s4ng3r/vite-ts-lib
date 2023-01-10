import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/my-lib/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: 'my-lib'
    }
  }
});
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import insertcss from './src/scripts/insertcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    insertcss(),
    vue(),
    dts({
      include: ['src/packages/**/*.{vue,ts}'],
      tsconfigPath: './tsconfig.build.json'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL('./src/packages/index.ts', import.meta.url)),
      name: 'PhotoWall',
      fileName: '[name]',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})

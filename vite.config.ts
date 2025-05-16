import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#src': path.resolve(__dirname, 'src'),
      '#services': path.resolve(__dirname, 'src/services'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/components/**/*.{types,styles,test}.{ts,tsx}'],
    },
    setupFiles: ['./vitest.setup.ts'],
  },
})

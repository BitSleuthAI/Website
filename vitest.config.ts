import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Exclude Playwright tests from vitest
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    // Include only unit test files in src
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
});

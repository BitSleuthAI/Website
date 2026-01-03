import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Exclude e2e tests and build artifacts from vitest
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/e2e/**',
      '**/*.e2e.*',
    ],
    // Include only unit test files in src
    include: [
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
      'src/**/*.spec.ts',
      'src/**/*.spec.tsx',
    ],
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
});

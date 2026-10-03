import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'src/components/**/*.ts*',
        'src/lib/**/*.ts*',
        'src/utils/**/*.ts*',
      ],
      exclude: [
        '**/*.test.*',
        '**/*.spec.*',
        '**/src/types/**',
        '**/src/app/**',
      ],
    },
  },
});
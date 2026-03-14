import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // for React component testing
    globals: true, // optional: use expect/test without import
    setupFiles: ['./tests/setup.js'], // optional: if you want global setup/mocks
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'tests/e2e/**', // ← exclude Playwright folder
    ],
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'], // only src/ unit tests
  },
});

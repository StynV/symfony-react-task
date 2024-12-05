import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
});

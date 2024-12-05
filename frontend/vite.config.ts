import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslint()],
})

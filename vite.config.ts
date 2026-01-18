import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/c
// onfig/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
    allowedHosts: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});

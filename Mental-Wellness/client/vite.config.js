import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    host: '0.0.0.0',  // Allows access from any IP
    port: 5173,       // Ensure it's the correct port
    strictPort: true,
    cors: true,       // Enable CORS (if needed)
  }
})

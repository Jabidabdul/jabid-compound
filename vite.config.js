import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["667b-2401-4900-8fc1-d7ea-3dbe-cb5f-5cc8-b420.ngrok-free.app"]
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173, host: true,

  },
  preview: {
    port: 4173,
    host: true, // Pastikan host diatur ke true atau string yang sesuai
    allowedHosts: true,
  },
})

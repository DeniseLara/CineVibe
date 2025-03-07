import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegúrate de que la base sea correcta
  server: {
    historyApiFallback: true, // Para evitar errores 404 en rutas de React
  },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ou use '0.0.0.0' para ouvir em todas as interfaces
    port: 5173,
  },
});

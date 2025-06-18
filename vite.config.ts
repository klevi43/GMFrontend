import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // configure vite for docker
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});

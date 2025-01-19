import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@pages": "/src/pages",
    },
  },
});

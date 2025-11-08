import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr"; // svg 임포트하기 위해서 설치

export default defineConfig({
  base: "/",
  plugins: [tailwindcss(), react(), svgr()],
});

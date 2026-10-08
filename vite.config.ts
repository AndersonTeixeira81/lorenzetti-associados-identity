import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Base configurável: em produção no GitHub Pages o site vive em /lorenzetti-associados-identity/.
// Para publicar em domínio próprio ou na raiz, ajuste a variável de ambiente BASE_PATH.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/lorenzetti-associados-identity/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
  },
});

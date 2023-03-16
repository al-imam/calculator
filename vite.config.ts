import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        description: "Don't go away from math it's nature! 🥹",
        name: "calculator",
        short_name: "calculator",
        icons: [
          {
            src: "/calculator.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "/calculator.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "maskable",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        categories: ["tools", "program"],
        orientation: "portrait",
        lang: "en",
      },
    }),
  ],
});

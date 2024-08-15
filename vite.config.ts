import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://frc-api.firstinspires.org/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyRequest) => {
            console.log(`Requesting ${proxyRequest.host}/${proxyRequest.path}`);

            console.log(
              JSON.stringify(proxyRequest.getHeaders(), undefined, 2)
            );
          });

          proxy.on("proxyRes", (proxyRes) => {
            console.log(
              "Received Response from the Target:",
              proxyRes.statusCode,
              JSON.stringify(proxyRes.headers)
            );
          });
        },
      },
    },
  },
});

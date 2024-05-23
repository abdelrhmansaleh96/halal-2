import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import alises from "./aliases";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, "", "");
  return {
    base: mode !== "development" ? env.VITE_APP_TITLE : "/",
    plugins: [react(), tsconfigPaths()],

    resolve: {
      alias: alises,
    },

    build: {
      outDir: "./wwwroot/prod-app/",
      rollupOptions: {
        output: {
          entryFileNames: `js/[name]-${env.VITE_APP_MODE}.js`,
          chunkFileNames: `js/[name]-${env.VITE_APP_MODE}.js`,
          assetFileNames: (assetInfo: any) => {
            var info = assetInfo.name.split(".");
            var extTypeFolder = info[info.length - 1];
            if (/png|jpe?g|gif|tiff|bmp/i.test(extTypeFolder)) {
              extTypeFolder = "img";
            } else if (/woff|woff2/.test(extTypeFolder)) {
              extTypeFolder = "css";
            } else if (/mp4|mb3|mov/.test(extTypeFolder)) {
              extTypeFolder = "media";
            } else if (/ico|svg/.test(extTypeFolder)) {
              extTypeFolder = "icons";
            }
            return `assets/${extTypeFolder}/[name]-${env.VITE_APP_MODE}[extname]`;
          },
        },
      },
    },
    server: {
      cors: false,
      proxy: {
        "/api": {
          target: "http://172.16.25.154:8004",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy, options) => {},
        },
      },
    },
  };
});

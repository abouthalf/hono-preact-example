import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 *
 * Build for Cloudflare Pages with client side scripts included
 *
 * See build command in package.json
 * vite build && vite build --mode client
 */
export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      name: "client",
      server: {
        origin: "http://localhost:3000",
        port: 3000,
      },
      plugins: [preact()],
      build: {
        rollupOptions: {
          input: "./src/client.tsx",
          output: {
            dir: "./dist/static",
            entryFileNames: "client.js",
            assetFileNames: "[name][extname]",
          },
        },
        emptyOutDir: false,
        copyPublicDir: false,
      },
    };
  } else {
    return {
      name: "server",
      plugins: [
        pages({
          entry: "src/index.tsx",
        }),
        devServer({
          entry: "src/index.tsx",
        }),
      ],
    };
  }
});

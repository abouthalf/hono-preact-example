export default function InfoCard() {
  return (
    <article>
      <header>Context and backstory</header>

      <p>
        This project is based upon this recipe in the Hono documentation:
        <br></br>
        <a href="https://hono.dev/getting-started/cloudflare-pages#client-side">
          https://hono.dev/docs/recipes/vite
        </a>
      </p>

      <p>
        This recipe supports compiling client side scripts with Vite along with
        the Hono server application. However, if you try to use Preact (or
        React) on the client side, you'll find that the client side scripts are
        compiled with Vite but do not function.
      </p>

      <p>
        This is because Hono's JSX implementation supercedes Preact's JSX
        implementation.
      </p>

      <p>
        The trick here is to use two configs for Vite. One for the client and
        one for the server.
      </p>

      <p>
        The <code>mode</code> property in the Vite config is used to determine
        which config to use.
      </p>

      <p>
        The <code>mode</code> property is set to <code>client</code> in the
        `package.json` sccript:
      </p>

      <p>
        <code>"dev:client": "vite --mode client",</code>
      </p>

      <footer>
        <figure>
          <code>
            <pre>
              {`
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
      server: {
        port: 5000,
      },
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
`}
            </pre>
          </code>
        </figure>
      </footer>
    </article>
  );
}

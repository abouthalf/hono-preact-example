import "hono";
import { jsxRenderer } from "hono/jsx-renderer";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response;
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="/static/pico.css" />
          {import.meta.env.PROD && (
            <link rel="stylesheet" href="/static/client.css" />
          )}
        </head>
        <body>
          {children}
          {import.meta.env.PROD ? (
            <>
              <script type="module" src="/static/client.js"></script>
            </>
          ) : (
            <>
              <script
                type="module"
                src="http://localhost:3000/@vite/client"
              ></script>
              <script
                type="module"
                src="http://localhost:3000/src/client.tsx"
              ></script>
            </>
          )}
        </body>
      </html>
    );
  },
  {
    docType: true,
  }
);

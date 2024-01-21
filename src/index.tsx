import { Hono } from "hono";
import { Fragment } from "hono/jsx";
import { renderer } from "./renderer";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(
    <Fragment>
      <main class="container">
        <header>
          <hgroup>
            <h1>Vite + Preact + Hono!</h1>
            <h2>The Preact element is injected below 👇</h2>
          </hgroup>
        </header>
        <div id="app"></div>
      </main>
    </Fragment>,

    { title: "Hello from Vite and Hono!s" }
  );
});

export default app;

import { Hono } from 'hono';
import { Fragment } from 'hono/jsx';
import { renderer } from './renderer';

import InfoCard from './server/InfoCard';

const app = new Hono();

app.get('*', renderer);

app.get('/', (c) => {
  return c.render(
    <Fragment>
      <main class='container'>
        <header>
          <hgroup>
            <h1>Vite + Preact + Hono!</h1>
            <h2>The Preact element is injected below 👇</h2>
          </hgroup>
          <a
            role='button'
            href='https://github.com/abouthalf/hono-preact-example'
          >
            View on GitHub
          </a>
        </header>
        <div id='app'></div>
        <InfoCard />
      </main>
    </Fragment>,

    { title: 'Hello from Vite and Hono!s' },
  );
});

app.get('/api', (c) => {
  return c.json({ message: 'Hello from the API!' });
});

export default app;

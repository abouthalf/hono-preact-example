import { useState } from 'preact/hooks';
import styles from './app.module.css';

type ApiResponse = {
  message: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('No message yet');

  const handleApiClick = async () => {
    const response = await fetch('/api');
    const data = (await response.json()) as ApiResponse;
    setMessage(data.message);
  };

  return (
    <article>
      <header>A simple counter in Preact</header>
      <section>
        <h2>Client side interactivity</h2>
        <p>The count is {count}. Click the button to increment the count.</p>
        <button
          class={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <hr />
      <section>
        <h2>Data fetching</h2>
        <p>
          Hono can serve up web pages and api routes. Click the button to fetch
          data from <a href='/api'>`/api`</a>.
        </p>
        <button class={styles.button} onClick={handleApiClick}>
          Call API
        </button>
        <p>
          <code>{message}</code>
        </p>
      </section>
      <footer>
        Working locally? Edit <code>src/app.tsx</code> and save to test HMR
      </footer>
    </article>
  );
}

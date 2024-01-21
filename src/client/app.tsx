import { useState } from "preact/hooks";
import styles from "./app.module.css";
import "./global.css";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <article>
      <header>A simple counter in Preact</header>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <footer>
        Edit <code>src/app.tsx</code> and save to test HMR
      </footer>
    </article>
  );
}

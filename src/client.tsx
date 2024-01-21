import "vite/modulepreload-polyfill";
import { render, h, Fragment } from "preact";
import { App } from "./client/app";
import "./client/index.css";

console.log("browser");

render(<App />, document.getElementById("app")!);

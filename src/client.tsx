import 'vite/modulepreload-polyfill';
import { render, h, Fragment } from 'preact';
import { App } from './client/app';
import './client/index.css';

render(<App />, document.getElementById('app')!);

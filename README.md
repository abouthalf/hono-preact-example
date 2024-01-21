# Hono + Preact Example

This project combines [Preact](https://preactjs.com) and [Hono](https://hono.dev).

Hono forms the server layer, with server-side JSX as the templating system for your HTML output.

Preact provides interactive application components.

## Why tho?

I wanted a very minimal web application server (Hono) that I could deploy almost anywhere without sacrificing real-time client side development.

This project uses Vite to build and serve both Hono and Preact from one repository, at the same time.

This is accomplished with a two-part configuration, one config for Hono, one for Preact.

Both builds are run simultaneously with `npm star` or `npm run dev`;

## Get started

After checking out the project, install dependencies with NPM (or your favorite package manager).

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

or simply

```bash
npm start
```

The web application will be found at port 5000 [http://localhost:5000]()

The client side JavaScript HMR server will run on port 3000.

These values can be changed in `vite.config`

## Notes

[Pico CSS](https://picocss.com) is used to make things purty.

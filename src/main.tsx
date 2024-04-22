import { Hono } from 'hono';
import { html } from 'hono/html';
import { jsx, Fragment, Child } from 'hono/jsx';

const app = new Hono();

const Layout = ({ children }: { children: Child }) => html`
  <!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cloudflare with Hono</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://rikitada.github.io/hono-app/src/index.css" />
    </head>

    <body>
      ${children}
    </body>
  </html>
`;

app.get('/', async (c) => {
  return c.render(
    <Layout>
      <div class="flares">
        <img src="https://playground.devprod.cloudflare.dev/flares.png" />
      </div>
      <main>
        <div class="workers-logo"></div>
        <p class={'mb-40'}>
          Welcome! Use this Playground to test drive a Worker, create a demo to share online, and when ready deploy directly to the edge by
          setting up a Cloudflare account.
        </p>
        <h1>What is a Worker?</h1>
        <p>
          A Cloudflare Worker is JavaScript code you write that handles your web site's HTTP traffic directly in Cloudflare's edge locations
          around the world, allowing you to locate code close to your end users in order to respond to them more quickly
        </p>
      </main>
    </Layout>
  );
});

export default app;

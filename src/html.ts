export const html = `

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cloudflare with Hono</title>
    <link rel="stylesheet" href="https://playground.devprod.cloudflare.dev/welcome-style.css" />
  </head>

  <body>
    <div class="flares">
      <img src="https://playground.devprod.cloudflare.dev/flares.png" />
    </div>
    <main>
      <div class="workers-logo"></div>
      <p>
        Welcome! Use this Playground to test drive a Worker, create a demo to share online, and when ready deploy directly to the edge by
        setting up a Cloudflare account.
      </p>
      <h1>What is a Worker?</h1>
      <p>
        A Cloudflare Worker is JavaScript code you write that handles your web site's HTTP traffic directly in Cloudflare's edge locations
        around the world, allowing you to locate code close to your end users in order to respond to them more quickly
      </p>
    </main>
  </body>
</html>

	`;

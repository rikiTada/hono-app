import { Hono } from 'hono';
import { basicAuth } from 'hono/basic-auth';

const app = new Hono();

// `http://127.0.0.1:8787/auth/*`にログインを求める場合
app.use(
  '/*',
  basicAuth({
    username: 'admin',
    password: 'admin',
  })
);

app.get('/', async (c) => {
  return c.html(`<h1>Hello World</h1>`);
});

export default app;

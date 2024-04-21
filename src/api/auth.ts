import { Hono } from 'hono';
import { html } from '../html';
const app = new Hono();

app.get('/page', async (c) => {
  return c.html(html);
});

export default app;

import { Hono } from 'hono';
import { html } from './html';
import users from './api/users';
import { prettyJSON } from 'hono/pretty-json';

const app = new Hono();

app.use('*', prettyJSON());
app.route('/api/users', users);

app.get('/', async (c) => {
  return c.html(html);
});

export default app;

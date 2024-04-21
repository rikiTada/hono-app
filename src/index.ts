import { Hono } from 'hono';
import { html } from './html';
import users from './api/users';
import { prettyJSON } from 'hono/pretty-json';
import { basicAuth } from 'hono/basic-auth';
import auth from './api/auth';

const app = new Hono();

app.use('*', prettyJSON());

app.use(
  '/auth/*',
  basicAuth({
    username: 'admin',
    password: 'admin',
  })
);

app.route('/api/users', users);
app.route('/auth', auth);

app.get('/', async (c) => {
  return c.html(html);
});

export default app;

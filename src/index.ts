import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';

import main from './main';
import users from './api/users';
import auth from './api/auth';

const app = new Hono();

app.use('*', prettyJSON());

app.route('/', main);
app.route('/api/users', users);
app.route('/auth', auth);

export default app;

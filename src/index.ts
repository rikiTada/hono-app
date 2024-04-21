import { Hono } from 'hono';
import { html } from './html';
import { users } from './api/users';
import { prettyJSON } from 'hono/pretty-json';

const app = new Hono();

app.use('*', prettyJSON());

app.get('/', async (c) => {
  return c.html(html);
});

app.get('/api/users', async (c) => {
  return c.json({ users });
});

app.get('/api/users/:id', async (c) => {
  const id = c.req.param('id');
  const user = users.find((u) => u.id === id);

  if (user) {
    return c.json({ user });
  } else {
    return c.json({ error: 'user not found.' }, 404);
  }
});

app.post('/api/users', async (c) => {
  const { name, content } = await c.req.json<{ name: string; content: string }>();

  const newUser = {
    id: String(users.length + 1),
    name,
    content,
  };

  users.push(newUser);
  console.log(users);
  return c.json({ user: newUser }, 201);
});

app.put('/api/users/:id', async (c) => {
  const id = c.req.param('id');
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return c.json({ error: 'user not found.' }, 404);
  }

  const { name, content } = await c.req.json();
  users[index] = { ...users[index], name, content };

  return c.json(users[index]);
});

app.delete('/api/users/:id', async (c) => {
  const id = c.req.param('id');
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return c.json({ error: 'user not found.' }, 404);
  }

  users.splice(index, 1);
  return c.json(users);
});

export default app;

import { Hono } from 'hono';
const users = [
  {
    id: '1',
    name: 'john',
    content: '',
  },
  {
    id: '2',
    name: 'taro',
    content: '',
  },
  {
    id: '3',
    name: 'tanaka',
    content: '',
  },
  {
    id: '4',
    name: 'ono',
    content: '',
  },
];

const app = new Hono();

app.get('/', async (c) => {
  return c.json({ users });
});

app.get('/:id', async (c) => {
  const id = c.req.param('id');
  const user = users.find((u) => u.id === id);

  if (user) {
    return c.json({ user });
  } else {
    return c.json({ error: 'user not found.' }, 404);
  }
});

app.post('', async (c) => {
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

app.put('/:id', async (c) => {
  const id = c.req.param('id');
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return c.json({ error: 'user not found.' }, 404);
  }

  const { name, content } = await c.req.json();
  users[index] = { ...users[index], name, content };

  return c.json(users[index]);
});

app.delete('/:id', async (c) => {
  const id = c.req.param('id');
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return c.json({ error: 'user not found.' }, 404);
  }

  users.splice(index, 1);
  return c.json(users);
});

export default app;
